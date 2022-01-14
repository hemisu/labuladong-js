export class PrefixSum {
  prefix: number[]
  constructor(nums: number[]) {
    this.prefix = new Array(nums.length + 1).fill(0)
    for (let i = 1; i < this.prefix.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i - 1]
    }
  }
  query(i: number, j: number): number {
    return this, this.prefix[j + 1] - this.prefix[i]
  }
}