import { arrToLink, reverseLink, reverseLinkIt} from './reverse-link'

describe('反转链表', () => {
  it('边界', () => {
    arrToLink([1])
  })
  it('递归', () => {
    const arr = [1,2,3,4,5]
    const t = arrToLink(arr)
    expect(reverseLink(t)).toEqual(arrToLink(arr.reverse()))
  })
  
  it('迭代', () => {
    const arr = [1,2,3,4,5]
    const t = arrToLink([1,2,3,4,5])
    expect(reverseLinkIt(t)).toEqual(arrToLink(arr.reverse()))
  })
})