import { add, RMB, L394 } from './0119'
/**
 * 一面（字节）1、
    class RMB {​
    }​

    const cash1 = new RMB(105);​
    const cash2 = new RMB(64);​

    const cash3 = cash1.add(cash2);​
    const cash4 = RMB.add(cash1, cash2);​
    const cash5 = new RMB(cash1 + cash2);​

    console.log(`${cash3}`, `${cash4}`, `${cash5}`);​
    在以上代码执行的时候，输出结果为：​
    1元6角9分, 1元6角9分, 1元6角9分

    2、
    字符串解码 leetcode 394（https://leetcode-cn.com/problems/decode-string/）

    3、
    实现add方法
    add(1)(2)(3) = 6
    add(1,2)(3) = 6
    add(1,2,3) = 6
    注意：不是运行结果等于6

    二面交叉（UG部门）

    1、
    二叉树层次遍历（leetcode107）https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

    2、
    实现防抖 debounce 方法
 */
describe('字节', () => {
  it('第一题', () => {
    const cash1 = new RMB(105);
    const cash2 = new RMB(64);

    const cash3 = cash1.add(cash2);
    const cash4 = RMB.add(cash1, cash2);
    const cash5 = new RMB(cash1 + cash2);

    console.log(`${cash3}`, `${cash4}`, `${cash5}`)

    // 在以上代码执行的时候，输出结果为：
    // 1元6角9分, 1元6角9分, 1元6角9分
  })

  it("第二题", () => {
    /**
     * 本题核心思路是在栈里面每次存储两个信息, (左括号前的字符串, 左括号前的数字), 比如abc3[def], 当遇到第一个左括号的时候，压入栈中的是("abc", 3), 然后遍历括号里面的字符串def, 当遇到右括号的时候, 从栈里面弹出一个元素(s1, n1), 得到新的字符串为s1+n1*"def", 也就是abcdefdefdef。对于括号里面嵌套的情况也是同样处理方式。
     * 凡是遇到左括号就进行压栈处理，遇到右括号就弹出栈，栈中记录的元素很重要。
     */
    expect(L394('3[a]2[bc]')).toBe('aaabcbc')
    expect(L394('3[a2[c]]')).toBe('accaccacc')
    expect(L394('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
    expect(L394('abc3[cd]xyz')).toBe('abccdcdcdxyz')
  })

  it('第三题', () => {
    expect(add(1,2,3)).toBe(6)
    expect(add(1,2)(3)).toBe(6)
    expect(add(1)(2)(3)).toBe(6)

  })
})