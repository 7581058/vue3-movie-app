import { double } from './example'

describe('그룹1', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })
  afterAll(() => {
    console.log('afterAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })
  afterEach(() => {
    console.log('afterEach')
  })

  test('첫 테스트', () => {
    console.log('테스트 1')
    expect(123).toBe(123)
  })

  test('인수가 숫자 데이터', () => {
    console.log('테스트 2')
    expect(double(3)).toBe(6)
    expect(double(10)).toBe(20)
  })

  test('인수가 없음', () => {
    console.log('테스트 3')
    expect(double()).toBe(0)
  })
})
