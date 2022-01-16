/**
 * S 中寻找 T 的子串
 * 滑动窗口的思想：初始化 l = r = 0, 把左闭右开的区间作为一个窗口，[l, r)
 * 1. 先不断扩大r，直到窗口里的解符合要求 （寻找可行解）
 * 2. 再在符合要求的情况下不断缩小l，同时不断更新最优解，直到窗口里的解不再符合要求 （寻找最优解）
 * 3. 直到 r 到达字符串的尽头
 **/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s: string, t: string) => {
  const need = new Map<string, number>()
  const window = new Map<string, number>()
  for (let c of t) {
    need.has(c) ? need.set(c, need.get(c) + 1) : need.set(c, 1)
  }
  let l = 0, r = 0, minLen = Number.MAX_SAFE_INTEGER, valid = 0, start = 0
  while (r < s.length) {
    const c = s[r]
    r++
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if (window.get(c) === need.get(c)) valid++
    }

    while (valid === need.size) {
      if (r - l < minLen) {
        start = l
        minLen = r - l
      }
      const d = s[l]
      l++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d) - 1)
      }
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + minLen)
};

export const L567 = (s1: string, s2: string) => {
  const need = {}
  const window = {}
  for (let c of s1) {
    need[c] ? need[c]++ : need[c] = 1
  }

  let l = 0, r = 0, valid = 0
  while (r < s2.length) {
    const c = s2[r]
    r++
    if (need[c]) {
      window[c] ? window[c]++ : window[c] = 1
      if (window[c] === need[c]) valid++
    }

    while (r - l >= s1.length) { // 判断是否要收缩，与上面不同的是这里要求是要求窗口大小等于s1的长度
      if (valid === Object.keys(need).length) return true
      const d = s2[l]
      l++
      if (need[d]) {
        if (need[d] === window[d]) valid--
        window[d]--
      }
    }
  }
  return false
}

export const L438 = (s: string, p: string) => {
  const need = {}
  const window = {}
  const res = []
  for (let c of p) {
    need[c] ? need[c]++ : need[c] = 1
  }

  let l = 0, r = 0, valid = 0
  while (r < s.length) {
    const c = s[r]
    r++
    if (need[c]) {
      window[c] ? window[c]++ : window[c] = 1
      if (window[c] === need[c]) valid++
    }
    while (r - l >= p.length) {
      if (valid === Object.keys(need).length) {
        res.push(l)
      }
      const d = s[l]
      l++
      if (need[d]) {
        if (window[d] === need[d]) valid--
        window[d]--
      }
    }
  }
  return res
}

export const L3 = (s: string) => {
  const window = {}

  let l = 0, r = 0, res = 0
  while (r < s.length) {
    const c = s[r]
    r++
    window[c] ? window[c]++ : window[c] = 1
    while (window[c] > 1) {
      const d = s[l]
      l++
      window[d]--
    }
    res = Math.max(res, r - l)
  }
  return res
}


export function L870(nums1: number[], nums2: number[]): number[] {
  const res = []
  nums1.sort((a, b) => a - b) // 小 -> 大
  const index2 = Array.from({ length: nums2.length }, (_, i) => i)
  index2.sort((a, b) => (nums2[b] - nums2[a]))

  let left = 0, right = nums1.length - 1
  for (let i = 0; i < nums2.length; i++) {
    const curB = nums2[index2[i]]
    if (nums1[right] <= curB) { // 最大的打不过，保存实力
      res[index2[i]] = nums1[left++]
    } else {
      res[index2[i]] = nums1[right--]
    }
  }
  return res
};