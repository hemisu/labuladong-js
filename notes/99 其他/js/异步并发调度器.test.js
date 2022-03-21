import { Scheduler } from './异步并发调度器'
describe('异步并发调度器',
  () => {
    it('test', () => {
      const scheduler = new Scheduler(2)
      scheduler.addTask(1, '1');   // 1s后输出’1'
      scheduler.addTask(2, '2');  // 2s后输出’2'
      scheduler.addTask(1, '3');  // 2s后输出’3'
      scheduler.addTask(1, '4');  // 3s后输出’4'

      scheduler.start();

    })
  })