import { L21, createList, printList, L21_1, mergeKLists } from './link'

describe('反转链表', () => {
  it('L21', () => {
    const res = L21(createList([1, 2, 4]), createList([1, 3, 4]))
    const res2 = L21_1(createList([1, 2, 4]), createList([1, 3, 4]))
    const printRes = printList(res)
    const printRes2 = printList(res2)
    expect(printRes).toEqual([1, 1, 2, 3, 4, 4 ])
    expect(printRes2).toEqual([1, 1, 2, 3, 4, 4 ])
  })
  it('合并多项列表 L23', () => {
    const res = mergeKLists(
      [
        createList([1,4,5]),
        createList([1,3,4]),
        createList([2,6])
      ]
    )
    console.log(printList(res))
  })
})