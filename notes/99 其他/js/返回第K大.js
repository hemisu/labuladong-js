// 返回第K大 [3,2,4,1,6,5] 3 => 3
const getKth = (arr, k) => {
  const swap = (l, r) => [arr[l], arr[r]] = [arr[r], arr[l]]
  const partition = (lo, hi) => {
    if(lo === hi) return lo
    const pivot = arr[lo]
    let i = lo, j = hi + 1
    while(true) {
      while(arr[++i] < pivot) {
        if(i === hi) break
      }
      while(arr[--j] > pivot) {
        if(j === lo) break
      }
      if(i >= j) break;
      swap(i, j)
    }
    swap(j, lo)
    return j
  }
  let left = 0, right = arr.length - 1
  k = arr.length - k
  while (left <= right) {
    const p = partition(left, right)
    arr //
    if (p < k) {
      left = p + 1
    } else if (p > k) {
      right = p - 1
    } else {
      return arr[p]
    }
  }
}

// getKth([3, 2, 1, 5, 6, 4], 2)
// getKth([3,2,3,1,2,4,5,5,6], 4)
getKth([-1, 2, 0], 2)