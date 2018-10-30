function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

export function log (content) {
  console.log(content)
}

export default forEach
