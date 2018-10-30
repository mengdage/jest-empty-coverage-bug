import forEach, { log } from './forEach'

function addOne (arr) {
  const results = []
  const plusOne = item => {
    log(item)
    results.push(item + 1)
  }

  forEach(arr, plusOne)

  return results
}

export default addOne
