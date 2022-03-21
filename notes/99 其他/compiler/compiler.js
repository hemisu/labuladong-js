/**
 *                  LISP                      C
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 * 
 *  Tokens might look something like this:
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 * 
 * And an Abstract Syntax Tree (AST) might look like this:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 **/

// 1. (add (subtract 4 2)) => [{ type: 'paren', value: '(' }, ...]
const code = `(add 2 (subtract 4 2))`
function tokenizer(input) {
  let current = 0 // 跟踪当前代码解析到何处的游标
  const tokens = [] // 存储 token
  while (current < input.length) {
    let char = input[current]
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
      current++
      continue
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })
      current++
      continue
    }

    // 跳过空格
    if (/\s/.test(char)) {
      current++
      continue
    }

    // 获取number
    const NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({ type: 'number', value })
      continue;
    }

    if (char === '"') {
      let value = ''
      char = input[++current]
      while (char !== '"') {
        value += char
        char = input[++current]
      }
      char = input[++current]
      tokens.push({ type: 'string', value })
      continue
    }

    const LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({ type: 'name', value })
      continue
    }

    throw new TypeError('dont know char', char)
  }
  return tokens
}

const tokens = tokenizer(code)

/**
 * [
 * { type: "paren", value: "(",},
 * { type: "name", value: "add",},
 * { type: "paren", value: "(",},
 * { type: "name", value: "subtract",},
 * { type: "number", value: "4",},
 * { type: "number", value: "2",},
 * { type: "paren", value: ")",},
 * { type: "paren", value: ")",}
 * ]
 */
/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

function parser(tokens) {
  let current = 0
  // 需要通过递归的方式进入，与上面tokenizer的 while loop 有所不同
  function walk() {
    let token = tokens[current]
    if (token.type === 'number') {
      current++
      return {
        type: 'NumberLiteral',
        value: token.value
      }
    }
    if (token.type === 'string') {
      current++
      return {
        type: 'StringLiteral',
        value: token.value
      }
    }
    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current] // 这里++current 跳过 '(' 因为在call expression中我们不关系这个文本
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }
      token = tokens[++current]

      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk())
        token = tokens[current]
      }
      current++
      return node
    }
    throw new TypeError(token.type)
  }
  let ast = {
    type: 'Program',
    body: []
  }
  while (current < tokens.length) {
    ast.body.push(walk())
  }
  return ast
}

const ast = parser(tokens)
// console.log('%c 🍾 ast: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', ast);

/**
 * ============================================================================
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

function traverser(ast, listener) {
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent)
    });
  }
  function traverseNode(node, parent) {
    const EnterMethod = listener[`enter${node.type}`]
    if (EnterMethod) {
      EnterMethod(node, parent)
    }
    switch (node.type) {
      case 'Program': traverseArray(node.body, node); break;
      case 'CallExpression': traverseArray(node.params, node); break;
      case 'NumberLiteral':
      case 'StringLiteral': break;
      default: throw new TypeError(node.type)
    }
    const ExitMethod = listener[`exit${node.type}`]
    if (ExitMethod) {
      ExitMethod(node, parent)
    }
  }
  traverseNode(ast, null)
}



// const listener = {
//   enterNumberLiteral(node, parent) { 
//     console.log(node.value)
//   },
//   exitNumberLiteral(node, parent) {
//     console.log(node.value)
//    },
//   enterCallExpression(node, parent) {
//     console.log(node.value)
//   },
//   exitCallExpression(node, parent) {
//     console.log(node.value)
//   },
// }

// traverser(ast, listener)

/**
 * transform 的作用
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: []
  }
  ast._context = newAst.body
  traverser(ast, {
    enterNumberLiteral(node, parent) {
      parent._context.push({
        type: 'NumberLiteral',
        value: node.value
      })
    },
    enterStringLiteral(node, parent) {
      parent._context.push({
        type: 'StringLiteral',
        value: node.value
      })
    },
    enterCallExpression(node, parent) {
      let expression = {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: node.name
        },
        arguments: []
      }
      node._context = expression.arguments
      if(parent.type !== 'CallExpression') {
        expression = {
          type: 'ExpressionStatement',
          expression: expression
        }
      }
      parent._context.push(expression)
    },
    exitCallExpression(node, parent) {
      console.log(node.value)
    },
  })
  return newAst
}

const newAst = transformer(ast)

function codeGen(node) {
  switch(node.type) {
    case 'Program': return node.body.map(codeGen).join('\n');
    case 'ExpressionStatement': return (codeGen(node.expression) + ';')
    case 'CallExpression': return (
      codeGen(node.callee) + '(' + node.arguments.map(codeGen).join(',') + ')'
    )
    case 'Identifier': return node.name;
    case 'NumberLiteral': return node.value;
    case 'StringLiteral': return '"' + node.value + '"';
    default: throw new TypeError(node.type)
  }
}

const output = codeGen(newAst)
console.log(output)