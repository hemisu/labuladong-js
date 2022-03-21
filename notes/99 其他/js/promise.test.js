describe('promise', () => {
  it('promise', async () => {
    class Promise1 {
      static resolve(value) {
        if (value && value.then) {
          return value
        }
        return new Promise1(resolve => resolve(value))
      }

      static reject(value) {
        if (value && value.then) {
          return value
        }
        return new Promise1((_, reject) => reject(value))
      }

      value = null
      reason = null
      cbs = []
      rejectCbs = []

      constructor(fn) {
        const resolve = (value) => {
          setTimeout(() => {
            this.value = value
            this.cbs.forEach(cb => cb(this.value));
          }, 0);
        }
        const reject = reason => {
          setTimeout(() => {
            this.reason = reason
            this.rejectCbs.forEach(cb => cb(this.reason))
          }, 0);
        }

        try {
          fn(resolve.bind(this), reject.bind(this))
        } catch (e) {
          reject.bind(this)
        }
      }

      then(onFulfilled, onRejected) {
        return new Promise1((resolve, reject) => {
          onFulfilled && this.cbs.push(() => {
            const ret = onFulfilled(this.value)
            if (ret instanceof Promise1) {
              ret.then(resolve)
            } else {
              resolve(ret)
            }
          })
          onRejected && this.rejectCbs.push(() => {
            const reason = onRejected(this.reason)
            if (reason instanceof Promise1) {
              reason.resolve(reject)
            } else {
              reject(reason)
            }
          })
        })
      }

      catch(fn) {
        return this.then(null, fn)
      }
    }

    await new Promise1((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 500);
    })
      .then((res) => {
        console.log(res);
        return new Promise1((resolve) => {
          setTimeout(() => {
            resolve(2);
          }, 500);
        });
      })
      .then(console.log);

    await Promise1.resolve(10)
      .then((o) => o * 10)
      .then((o) => o + 10)
      .then((o) => {
        console.log(o);
      });

    try {
      await new Promise1((resolve, reject) => reject("Error"))
        .catch((e) => {
          console.log("Error", e);
        });
    } catch (error) {
      console.log(error)
    }

    await new Promise((_, rej) => rej('error')).catch(e => console.log('error', e))
  })


})