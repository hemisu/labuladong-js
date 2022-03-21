class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

// };
export const createList = arr => {
  let dummy = new ListNode(), p = dummy
  for (let node of arr) {
    p.next = new ListNode(node)
    p = p.next
  }
  return dummy.next
}

export const printList = head => {
  const res = []
  let p = head
  while (p) {
    res.push(p.val)
    p = p.next
  }
  return res
}

export function L21(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let p1 = list1
  let p2 = list2
  let dummy = new ListNode(), p = dummy
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      p.next = new ListNode(p1.val)
      p1 = p1.next
    } else {
      p.next = new ListNode(p2.val)
      p2 = p2.next
    }
    p = p.next
  }
  if (p1) {
    p.next = p1
  }
  if (p2) {
    p.next = p2
  }
  return dummy.next
};

export function L21_1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
    list1.next = L21_1(list1.next, list2)
    return list1
  } else {
    list2.next = L21_1(list1, list2.next)
    return list2
  }
};

const merge2List = (l1, l2) => {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = merge2List(l1.next, l2)
    return l1
  } else {
    l2.next = merge2List(l1, l2.next)
    return l2
  }
}

// 通俗易懂 不搞什么优先队列 小根堆
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let res = new ListNode(-1)
  if (!lists.length) return null
  for (let p of lists) {
    res.next = merge2List(res.next, p)
  }
  return res.next
};

export function L19RemoveNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(), p1 = dummy, p2 = dummy, pre = null
  dummy.next = head
  while (n--) {
    p1 = p1.next
  }
  while (p1) {
    p1 = p1.next
    pre = p2
    p2 = p2.next
  }
  pre.next = p2.next
  return dummy.next
};