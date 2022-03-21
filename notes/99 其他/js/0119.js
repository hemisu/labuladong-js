export class RMB {
  _current;

  constructor(current) {
    this._current = current
  }

  get current() {
    return this._current
  }

  static add(...cashes) {
    const current = cashes.reduce((p, c) => p + c.current, 0)
    return new RMB(current)
  }

  valueOf() {
    return this._current
  }

  add(...cashes) {
    return this.fmt(cashes.reduce((p, c) => p + c.current, this._current))
  }

  toString() {
    return this.fmt(this._current)
  }

  fmt(num) {
    const unit = ['元', '角', '分']
    let i = 0;
    let res = []

    while (num / 10) {
      res.push(Math.floor(num % 10) + unit[i++])
      num = Math.floor(num / 10)
    }
    return res.reverse().join('')
    // return `${Math.floor(num / 100)}元${Math.floor(num / 10)}角${Math.floor(num % 10)}分`
  }
}

const _add = (a, b, c) => a + b + c
const curry = (fn, len = fn.length, ...args) => args.length >= len ? fn(...args) : curry.bind(null, fn, len, ...args)
export const add = curry(_add)



// 394. 字符串解码
// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"

// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"
// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"


export const L394 = s => {
  const stack = []
  const isNumber = d => d >= '0' && d <= '9'
  const isAlpha = c => c >= 'a' && c <= 'z'
  const renderByCnt = (cnt, chars) => Array.from({ length: cnt }, () => chars).join('')

  let res = ''
  let cnt = 0
  for (let c of s) {
    if (isNumber(c)) {
      cnt = 10 * cnt + Number(c)
    } else if (c === '[') {
      stack.push([res, cnt])
      res = ''
      cnt = 0
    } else if (c === ']') {
      const [_res, _cnt] = stack.pop()
      res = _res + renderByCnt(_cnt, res)
    } else {
      res += c
    }
  }
  return res
}