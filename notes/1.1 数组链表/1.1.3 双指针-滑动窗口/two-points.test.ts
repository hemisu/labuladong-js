import { L870 } from './two-points'
describe('双指针-滑动窗口', () => {
  it('L76 最小覆盖子串', async () => {
    const { minWindow } = await import('./two-points')
    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
    expect(minWindow('a', 'a')).toEqual('a')
    expect(minWindow('a', 'aa')).toEqual('')
  })

  it('L567 字符串排列', async () => {
    const { L567 } = await import('./two-points')
    expect(L567("ab", "eidbaooo")).toBeTruthy()
    expect(L567("ab", "eidboaoo")).toBeFalsy()
  })

  it('L438 找到字符串中所有字母异位词', async () => {
    const { L438 } = await import('./two-points')
    expect(L438("cbaebabacd", "abc")).toEqual([0, 6])
    expect(L438("abab", "ab")).toEqual([0, 1, 2])
  })
  it('L3 无重复字符的最长子串', async () => {
    const { L3 } = await import('./two-points')
    expect(L3("abcabcbb")).toEqual(3)
    expect(L3("bbbbb")).toEqual(1)
    expect(L3("pwwkew")).toEqual(3)
    expect(L3("")).toEqual(0)
  })

  it('L870 田忌赛马', () => {
    expect(L870([2, 7, 11, 15], [1, 10, 4, 11])).toEqual([2, 11, 7, 15])
    expect(L870([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([24, 32, 8, 12])
  })
})