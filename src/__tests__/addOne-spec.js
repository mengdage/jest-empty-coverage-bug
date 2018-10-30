import addOne from '../addOne'
import forEach, { log } from '../forEach'

jest.mock('../forEach')

test('addOne', () => {
  const nums = [1, 2, 3]
  forEach.mockImplementation((arr, cb) => {
    arr.forEach(item => {
      cb(item + 10)
    })
  })

  log.mockImplementation(() => console.log('log'))
  const results = addOne(nums)

  expect(results).toEqual([12, 13, 14])
  expect(log).toHaveBeenCalledTimes(3)
})
