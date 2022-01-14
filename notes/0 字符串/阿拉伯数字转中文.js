const numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const weiMap = ['十', '百', '千', '万', '亿']
export const getChineseNum = num => {
  let res = ''
  let l = 0, len = num.length, r = len - 1
  num = String(num)
  if (num[0] === '-') {
    res += '负'
    l++
  }
  while (l + 4 <= r) {
    r -= 4; // 将r每次左移4位直到l和r在同一节
  }
  while (l < num.length) {
    let flag = false; // 表示没有积累的0
    let isPrint = false; // 表示该节没有输出过其中的位
    while (l <= r) { // 从左到右处理每一位
      if (l > 0 && num[l] === '0') { // 如果当前位为0
        flag = true
      } else { // 当前位不为0
        if (flag) {
          res += numMap[0]
          flag = false
        }
        res += numMap[num[l] - '0']
        isPrint = true
        if (l !== r) {
          res += weiMap[r - l - 1]
        }
      }
      l++
    }
    if (isPrint && r !== num.length - 1) {
      res += weiMap[(num.length - 1 - r) / 4 + 2]
    }
    r += 4
  }
  return res
}

// export const t = (chunk, i, chunkArr) => {
//   console.log('%c 🍻 chunk: ', 'font-size:20px;background-color: #465975;color:#fff;', chunk);
//   const ret = chunk.split('')
//     .reduce(([flag, isPrint, print], c, ii, singleArr) => {
//       console.log('%c 🥤 [flag, isPrint, print], c, ii: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', [flag, isPrint, print], c, ii);
//       // console.log('%c 🍥 [flag, isPrint, print], c: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', [flag, isPrint, print], c);

//       return [
//         !!i && (c === '0'), // 有出现过不为0的值，且不是第一节
//         !!(isPrint || (c - '0')), // 表示该节没有输出过其中的位
//         c === '0' ? print
//           : print + (flag ? numMap[0] : '') + numMap[c] + ['', '十', '百', '千'][singleArr.length - 1 - ii]
//       ]
//     }
//       , [false, false, ''])[2] + (i !== chunkArr.length - 1 ? ['千', '万', '亿'][chunkArr.length - 1 - i] : '')
//   console.log('%c 🍸 ret: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', ret);
//   return ret
// }
// export const trans = (str) => {
//   return str.split(/(?=(?:\d{4})+(?!\d))/g).map(t).join('')
// }

export const trans = (str) => String(str).split(/(?=(?:\d{4})+(?!\d))/g).map((chunk, i, chunkArr) => chunk.split('').reduce(([flag, isPrint, print], c, ii, singleArr) => [!!i && (c === '0'), !!(isPrint || (c - '0')), c === '0' ? print : print + (flag ? '零' : '') + ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'][c] + ['', '十', '百', '千'][singleArr.length - 1 - ii]], [false, false, ''])[2] + (i !== chunkArr.length - 1 ? ['千', '万', '亿'][chunkArr.length - 1 - i] : '')).join('')
