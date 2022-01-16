describe('数组链表', () => {
  it('p43 差分数组 核心代码', async () => {
    const { Difference } = await import('./Difference')
    const difference = new Difference([8, 5, 9, 6, 1])
    expect(difference.diff).toEqual([8, -3, 4, -3, -5])
    expect(difference.result).toEqual([8, 5, 9, 6, 1])
  })

  it('p45 差分数组 370题 区间加法', async () => {
    const { L370 } = await import('./Difference')
    const res = L370(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]])
    expect(res).toEqual([-2, 0, 3, 5, 3])
  })

  it('p45 差分数组 1109题 航班预订统计', async () => {
    const { L1109 } = await import('./Difference')
    const res = L1109([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)
    expect(res).toEqual([10, 55, 45, 25, 25])
  })

  it('p45 差分数组 1094题 拼车', async () => {
    const { L1094 } = await import('./Difference')
    
    expect(L1094([[2,1,5],[3,3,7]], 4)).toEqual(false)
    expect(L1094([[2,1,5],[3,3,7]], 5)).toEqual(true)
    expect(L1094([[2,1,5],[3,5,7]], 3)).toEqual(true)
    expect(L1094([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toEqual(true)
    expect(L1094([[7,5,6],[6,7,8],[10,1,6]], 16)).toEqual(false)
  })
})