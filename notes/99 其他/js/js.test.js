import { Promise1, or } from './promise';

describe('test', () => {
  it('promise', async () => {
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
  })

  it('or', () => {
    or(Promise.resolve(false), Promise.resolve('hi'))
      .then(function (actual) {
        var expected = 'hi';
        console.log(actual, expected)
      });
  })

  it('题0210', () => {
    // [1,1,1,1]
    function p(n) {
      const res = []
      function dfs(st, path = [], sum = 0) {
        if (sum > n) return;
        // 分完了
        if (sum === n) {
          res.push(path.slice())
          return;
        }
        // 划分
        for (let i = st; i <= n; i++) {
          // if (sum + i === n - (sum + i)) continue;
          path.push(i)
          dfs(i, path, sum + i)
          path.pop()
        }
      }
      dfs(1)
      return res
    }
    const ret = p(4)
    console.log('%c 🥡 ret: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', ret);
  })

  it('dp 失败了', () => {
    function p(n) {
      let dp = [[1]]
      for (let i = 2; i <= n; i++) {
        console.log(dp)
        dp = [...dp.map(v => ([...v, 1])), [i]]
      }
      return dp
    }
    const res = p(7)
    console.log('%c 🥠 res: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', res);
  })

  it('scheduler', (done) => {
    class Scheduler {
      constructor() {
        this.execQueue = []
        this.pendingQueue = []
      }
      // 返回 promise
      add(promiseCreator) {
        return new Promise(r => {
          if (this.execQueue.length < 2) {
            this.execQueue.push([promiseCreator, r])
            this._exec()
          } else {
            this.pendingQueue.push([promiseCreator, r])
          }
        })
      }
      _exec() {
        if (!this.execQueue.length) { return done() };
        this.execQueue.forEach(([task, r], i) => {
          Promise.resolve(task()).then(r).finally(() => {
            this.execQueue.splice(i, 1)
            if (this.pendingQueue.length) {
              const newTask = this.pendingQueue.shift()
              this.execQueue.unshift(newTask)
              this._exec()
            }
          })
        })
      }
    }

    const timeout = (time) => new Promise(resolve => {
      setTimeout(resolve, time)
    })

    const scheduler = new Scheduler()
    const addTask = (time, order) => {
      scheduler.add(() => timeout(time))
        .then(() => console.log(order))
    }

    addTask(1000, '1')
    addTask(500, '2')
    addTask(300, '3')
    addTask(400, '4')

    // output: 2 3 1 4
    // 一开始，1 2两个任务进入队列
    // 500ms时，2完成，输出2，任务3进队
    // 800ms时，3完成，输出3，任务4进队
    // 1000ms时，1完成，输出1
    // 1200ms时，4完成，输出4
  })

  it('L394 字符串解码', () => {
    /**
     * s = "3[a]2[bc]"
       输出："aaabcbc" 

       输入：s = "3[a2[c]]"
       输出："accaccacc"
     */
    const L394 = (s) => {
      let res = '', num = 0
      const stack = []
      for (let c of s) {
        switch (true) {
          case (c >= '0' && c <= '9'):
            num = num * 10 + (c - '0');
            break;
          case (c === ']'):
            const [cnt, last_res] = stack.pop()
            res = last_res + res.repeat(cnt)
            break;
          case (c === '['):
            stack.push([num, res]);
            num = 0
            res = ''
            break;
          case (c >= 'a' && c <= 'z'):
            res += c
            break;
        }
      }
      return res
    }
    // console.log(L394('3[a]2[bc]'))
    const L394_2 = (s) => {
      const dfs = (s, i) => {
        let res = '', cnt = 0
        while (i < s.length) {
          if (s[i] >= '0' && s[i] <= '9') {
            cnt = cnt * 10 + (s[i] - '0')
          } else if (s[i] === '[') {
            const [new_i, tmp] = dfs(s, i + 1)
            res = res + tmp.repeat(cnt)
            cnt = 0
            i = new_i
          } else if (s[i] === ']') {
            return [i, res]
          } else {
            res += s[i]
          }
          i++
        }
        return res
      }
      return dfs(s, 0)
    }
    console.log(L394_2('3[a]2[bc]'))
  })


  it('LRU', () => {
    class ListNode {
      constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.pre = null
      }
    }

    /**
     * 利用双向链表处理
     * @param {number} capacity
     */
    var LRUCache = function (capacity) {
      this.map = {}
      this.capacity = capacity
      this.count = 0
      this.head = new ListNode()
      this.tail = new ListNode()
      this.head.next = this.tail
      this.tail.pre = this.head
    };


    /** 
     * @param {number} key
     * @return {number}
     */
    LRUCache.prototype.get = function (key) {
      const node = this.map[key]
      if(!node) return -1
        // 访问完就放最前
      this.moveToHead(node)
      return node.val
    };

    LRUCache.prototype.moveToHead = function (node) {
      this.removeFromList(node)
      this.addToHead(node)
    }

    LRUCache.prototype.removeFromList = function (node) {
      const pre = node.pre
      const next = node.next
      pre.next = next
      next.pre = pre
    }

    LRUCache.prototype.addToHead = function(node) {
      const next = this.head.next
      node.pre = this.head
      this.head.next = node
      node.next = next
      next.pre = node
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    LRUCache.prototype.put = function (key, value) {
      const node = this.map[key]
      // 如果已经存在了，放到最前面
      if (node) {
        node.val = value
        this.moveToHead(node)
      } else {
        const node = new ListNode(key, value)
        this.map[key] = node
        this.addToHead(node)
        this.count++
        // 如果容量超出，就删除头部
        if (this.count > this.capacity) {
          this.removeLRUItem()
        }
      }
    };

    LRUCache.prototype.removeLRUItem = function() {
      const tailItem = this.popTail()
      delete this.map[tailItem.key]
      this.count--
    }

    LRUCache.prototype.popTail = function() {
      const removed = this.tail.pre
      this.removeFromList(removed)
      return removed
    }

    /**
     * Your LRUCache object will be instantiated and called as such:
     * var obj = new LRUCache(capacity)
     * var param_1 = obj.get(key)
     * obj.put(key,value)
     */
    var obj = new LRUCache(2)
    obj.put(2, 1); // 缓存是 {2=1}
    obj.put(1, 1); // 缓存是 {2=1, 1=1}
    obj.put(2, 3); // 缓存是 {1=1, 2=3}
    obj.put(4, 1); // 缓存是 {2=3, 4=1}
    // obj.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    // obj.get(2);    // 返回 -1 (未找到)
    // obj.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    console.log(obj.get(1));    // 返回 -1 (未找到)
    console.log(obj.get(2));    // 返回 3
    // console.log(obj.get(4));    // 返回 4
  })

  it('koa', async () => {
    const middlewares = [];

    middlewares.push(async function (ctx, next) {
      console.log("1");
      await next();
      console.log("6");
    });

    middlewares.push(async function (ctx, next) {
      console.log("2");
      await next();
      console.log("5");
    });

    middlewares.push(async function (ctx, next) {
      console.log("3");
      await next();
      console.log("4");
    });

    async function run() {
      const middleware = middlewares.shift();
      await (middleware && middleware({}, run));
    }
    // await run()

    function compose(middleware) {
      return (ctx) => {
        const dispatch = (i) => {
          const fn = middleware[i]
          if(i === middleware.length) return
          return fn(ctx, () => dispatch(i + 1))
        }
        dispatch(0)
      }
    }
    compose(middlewares)({})
  })

}, 3000)

// (4)

