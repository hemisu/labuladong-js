function NodeLink (val?: number) {
  this.val = val
  this.next = null
}

export const arrToLink = arr => {
  let dummy = new NodeLink(), pre = dummy
  for(let num of arr) {
    const cur = new NodeLink(num)
    pre.next = cur
    pre = cur
  }
  return dummy.next
}

export const reverseLink = head => {
  if (!head || !head.next) return head
  const p = reverseLink(head.next)
  head.next.next = head
  head.next = null
  return p
}

export const reverseLinkIt = head => {
  let prev = null
  let cur = head
  if(!head) return head

  while(cur) {
    const temp = cur.next
    cur.next = prev

    prev = cur
    cur = temp
  }
  return prev
}