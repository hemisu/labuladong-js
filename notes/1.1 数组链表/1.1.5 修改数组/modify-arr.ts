export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
export const arrToLink = arr => {
  let dummy = new ListNode(), p = dummy
  for (let n of arr) {
    p.next = new ListNode(n)
    p = p.next
  }
  return dummy.next
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let slow = head, fast = head
  while (fast) {
    if (slow.val !== fast.val) {
      slow.next = fast
      slow = slow.next
    }
    fast = fast.next
  }
  slow.next = null
  return head
};

export function removeElement(nums: number[], val: number): number {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};


export function moveZeroes(nums: number[]): void {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  for(let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
};
