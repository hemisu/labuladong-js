import { removeDuplicates, arrToLink, deleteDuplicates, removeElement, moveZeroes } from './modify-arr'
describe('操作数组', () => {
  it('L26', () => {
    const arr = [1, 1, 2]

    expect(removeDuplicates(arr)).toEqual(2)
    expect(arr).toEqual([1, 2, 2])

    const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(arr2)).toEqual(5)
    expect(arr2).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4])
    // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    // [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
    // [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
    // [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
    // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
  })
  it('L83', () => {
    const link = arrToLink([1, 1, 2])
    expect(deleteDuplicates(link)).toEqual(arrToLink([1, 2]))
    const link2 = arrToLink([1, 1, 2, 3, 3])
    expect(deleteDuplicates(link2)).toEqual(arrToLink([1, 2, 3]))
  })

  it('27', () => {
    const arr = [3, 2, 2, 3]
    expect(removeElement(arr, 3)).toBe(2)
    expect(arr).toEqual([2, 2, 2, 3])

    const arr2 = [0, 1, 2, 2, 3, 0, 4, 2]
    expect(removeElement(arr2, 2)).toBe(5)
    expect(arr2).toEqual([0, 1, 3, 0, 4, 0, 4, 2])
    // [0,1,2,2,3,0,4,2]
    // [0,1,3,2,3,0,4,2]
    // [0,1,3,0,3,0,4,2]
    // [0,1,3,0,4,0,4,2]

  })

  it('283', () => {
    const arr = [0, 1, 0, 3, 12]
    moveZeroes(arr)
    expect(arr).toEqual([1, 3, 12, 0, 0])
  })
})

