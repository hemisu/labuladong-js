describe('fundamental', () => {
  it('flatten', () => {
    const flatten = (arr, depth = Infinity) => {
      return arr.reduce(
        (pre, cur) => ([...pre, ...(Array.isArray(cur) && depth > 0) ? flatten(cur, --depth) : [cur]])
        , [])
    }
    const res1 = flatten([1, 2, [3, 4, [5, 6]]], 3)
    console.log('%c 🍝 res1: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', res1);
    const res2 = flatten([1, 2, [3, 4, [5, 6]]], 1)
    console.log('%c 🍝 res2: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', res2);
    const res3 = flatten([1, 2, [3, 4, [5, 6]]])
    console.log('%c 🍝 res3: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', res3);
  })

  it('curry', () => {
    const curry = (fn, len = fn.length, ...args) => args.length >= len ? fn(...args) : curry.bind(null, fn, len, ...args)


    const add = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g;
    const curryAdd = curry(add);
    expect(curryAdd(1)(2)(3)(4)(5)(6)(7)).toBe(28)
  })
})