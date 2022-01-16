export function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return -1
};

export function searchLeft(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) r = mid - 1
    else if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return (l >= nums.length - 1 || nums[l] !== target) ? -1 : l
}
export function searchRight(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) l = mid + 1
    else if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return (r < 0 || nums[r] !== target) ? -1 : r
}

export function searchRange(nums: number[], target: number): number[] {
  return [searchLeft(nums, target), searchRight(nums, target)]
};

export function L875(piles: number[], h: number): number {
  // h = f(x)
  const f = x => {
    let hours = 0
    for (let p of piles) {
      hours += ~~(p / x)
      if (p % x) hours++
    }
    return hours
  }
  let l = 1, r = 10e9
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (f(mid) === h) r = mid - 1
    else if (f(mid) < h) r = mid - 1
    else l = mid + 1
  }
  return l
}

export function L1011(weights: number[], days: number): number {
  const f = x => {
    let day = 0
    for (let i = 0; i < weights.length;) {
      let cap = x
      while (i < weights.length) {
        if (cap < weights[i]) break;
        else cap -= weights[i]
        i++
      }
      day++
    }
    return day
  }

  let l = Math.max(...weights), r = weights.reduce((a, b) => a + b)
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (f(mid) === days) r = mid - 1
    else if (f(mid) < days) r = mid -1
    else l = mid + 1
  }
  return l
};