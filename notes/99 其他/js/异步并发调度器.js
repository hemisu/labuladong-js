const delay = s => new Promise(r => setTimeout(r, s * 1000))
class Scheduler {
  constructor(maxCnt) {
    this._maxCnt = maxCnt
    this._cbs = []
    this._idle = 0
  }

  addTask(seconds, print) {
    this._cbs.push(() => delay(seconds).then(() => {
      console.log(print)
    }))
  }

  start() {
    while (this._maxCnt > 0) {
      this._maxCnt--
      this._cbs.length && this._cbs.shift()().finally(() => {
        this._maxCnt += 1
        this.start()
      })
    }
  }
}
const scheduler = new Scheduler(2)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'

scheduler.start();