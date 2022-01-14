export class Difference {
  diff: number[]
  constructor(nums: number[]) {
    if (nums.length === 0) throw new Error('nums is empty');

    this.diff = new Array(nums.length).fill(0)
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }
  increment(i: number, j: number, val: number) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }
  get result() {
    const res = new Array(this.diff.length).fill(0)
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i]
    }
    return res
  }
}

export const L370 = (length, updates) => {
  const res = new Array(length).fill(0)
  const diff = new Difference(res)
  for (const [i, j, val] of updates) {
    diff.increment(i, j, val)
  }
  return diff.result
}

export const L1109 = (bookings, n) => {
  const res = new Array(n).fill(0)
  const diff = new Difference(res)
  for (const [i, j, k] of bookings) {
    diff.increment(i - 1, j - 1, k)
  }
  return diff.result
}

export const L1094 = (trips, capacity) => {
  const res = new Array(1000 + 1).fill(0)
  const diff = new Difference(res)
  for (const [k, i, j] of trips) {
    diff.increment(i, j - 1, k)
  }
  return diff.result.every(p => p <= capacity)
}
