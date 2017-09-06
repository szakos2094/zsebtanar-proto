import { curry, path, pipe, sortBy, toPairs } from 'ramda'

export const pairsInOrder = pipe(toPairs, sortBy(path([1, 'order'])))

export const assert = curry((predicate, message, value) => {
  if (predicate(value)) {
    return value
  } else {
    throw new Error(message)
  }
})

export function shuffle (ary) {
  const array = [...ary]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}