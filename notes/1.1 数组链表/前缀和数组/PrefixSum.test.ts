describe('数组链表', () => {
  it('p40 前缀和 核心代码', async () => {
    const { PrefixSum } = await import('./PrefixSum')
    const prefixsum = new PrefixSum([3, 5, 2, -2, 4, 1])
    expect(prefixsum.prefix).toEqual([
      0, 3, 8, 10,
      8, 12, 13
    ])
  })
})