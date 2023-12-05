/** @param {string} name */
export function getNumberOfChars(name) {
  return name.length
}

/** @param {string} name */
export function getLower(name) {
  return name.toLowerCase()
}

/** @param {string} name */
export function getUpper(name) {
  return name.toUpperCase()
}
/** @param {string} name */
export function getFirstUpper(name) {
  return `${name[0].toUpperCase()}${name.slice(1)}`
}

//пытался зделать для повторяющихся символов но не смог
/** @param {string} name */
export function repetitions(name) {
  let repetArray = name.split()
  let result = []
  for (let i = 0; i < repetArray.length; i++) {
    if (repetArray[i] !== repetArray[i + 1]) {
      return (result = repetArray[i] + repetArray[i + 1])
    }
  }
  return result.join()
}

console.log(repetitions)
