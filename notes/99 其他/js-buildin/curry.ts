const add = (a, b, c) => a + b + c
add(1, 2, 3)
const curry = (fn, len = fn.length, ...args) => args.length >= len ? fn(...args) : curry.bind(null, fn, len, ...args)
export const curriedAdd = curry(add)(1)(2)(3)
console.log('%c 🍧 curriedAdd: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', curriedAdd, 3);