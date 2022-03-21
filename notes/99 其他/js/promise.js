export function Promise1(fn) {
  this.cbs = []

  const resolve = value => {
    setTimeout(() => {
      this.value = value
      this.cbs.forEach(cb => cb(value))
    }, 0);
  }

  fn(resolve.bind(this))
}

Promise1.prototype.then = function(onResolve) {
  
  return new Promise1((resolve) => {
    this.cbs.push(() => {
      const res = onResolve(this.value)
      if(res instanceof Promise1) res.then(resolve)
      else resolve(res)
    })
  })
}

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

export function or(...promises) {
  let i = 0
  return (function next(values) {
    if(!values && i < promises.length) {
      return Promise.resolve(promises[i++]).then(next)
    }
    return Promise.resolve(values)
  })(false)
}