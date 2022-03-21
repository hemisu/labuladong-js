import { multiRequest } from './请求控制'
const delay = s => new Promise(r => setTimeout(() => { r(s) }, s * 1000))
describe('urls', () => {
  it('test', async () => {

    const urls = [
      () => delay(1),
      () => delay(2),
      () => delay(1),
    ]
    const result = await multiRequest(urls, 2)
    console.log('%c 🥒 result: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', result);
  })
});
