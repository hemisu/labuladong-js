import { arrToLink, reverseLink, reverseLinkIt} from './reverse-link'

const arr = [1,2,3,4,5]
describe('反转链表', () => {
  it('边界', () => {
    const t = arrToLink([1])
    console.log(t)
  })
  it('递归', () => {
    const t = arrToLink(arr)
    expect(reverseLink(t)).toEqual(arrToLink(arr.reverse()))
  })
  
  it('迭代', () => {
    const t = arrToLink([1,2,3,4,5])
    expect(reverseLinkIt(t)).toEqual(arrToLink(arr.reverse()))
  })
})