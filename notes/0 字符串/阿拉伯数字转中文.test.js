import { getChineseNum, t, trans } from './阿拉伯数字转中文'
describe('阿拉伯数字转中文', () => {
  it('转4003', () => {
    expect(getChineseNum('4003')).toBe('四千零三')
  })
  it('转403', () => {
    expect(getChineseNum('403')).toBe('四百零三')
  })
  it('转4300', () => {
    expect(getChineseNum('4300')).toBe('四千三百')
  })
  it('转100303000', () => {
    expect(getChineseNum('100303000')).toBe('一亿零三十万三千')
  })
  it('转1303101000', () => {
    expect(getChineseNum('1303101000')).toBe('一十三亿零三百一十万一千')
  })
  it('转 103000', () => {
    expect(getChineseNum('103000')).toBe('一十万三千')
  })
  it('转 -103000', () => {
    expect(getChineseNum('-103000')).toBe('负一十万三千')
  })

  it('一行操作', () => {
    // 一亿零三十万三千
    expect(trans('100303000')).toBe('一亿零三十万三千')
  })
})