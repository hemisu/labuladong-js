// 实现一个批量请求两数 multiRequest (urls, maxNum)，要求如下：
// •要求最大并发数 maxNum
// •每当有一个请求返回，就留下一个空位，可以增加新的请求
// •所有请求完成后，结果按照 urls 里面的顺序依次打出


export function multiRequest(urls, maxNum) {
  const ret = []
  let idx = 0, index = 0, cnt = 0
  const now = Date.now()
  return new Promise((resolve) => {
    function run() {
      idx++
      if (idx > maxNum) return
      if (index >= urls.length) return
      const current = index++
      urls[current]().then(r => {
        console.log('已经过去了', Math.floor(Date.now() - now) / 1000, 's', r)
        ret[current] = r
      }).finally(() => {
        idx--
        cnt++
        if (cnt >= urls.length) {
          return resolve(ret)
        }
        run()
      })
    }
    while (idx < maxNum) {
      run()
    }
  })
}
