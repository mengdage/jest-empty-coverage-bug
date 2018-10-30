import forEach from '../forEach'

test('forEach', () => {
  const cbMock = jest.fn()

  forEach([1, 2, 3], cbMock)

  expect(cbMock).toHaveBeenCalledTimes(3)
})
