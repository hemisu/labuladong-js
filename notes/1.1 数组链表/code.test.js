import { intToRoman, createBinaryTree }from './code'
describe('新建测试用例', () => {
  it('p', async () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV")
    expect(intToRoman(58)).toEqual("LVIII")
    expect(intToRoman(9)).toEqual("IX")
  })

  it('创建二叉树', () => {
    const res = createBinaryTree([1, 2, 3, 4, 5, 5, 6, 7, 8, 9])
    console.log(res)
  })

})