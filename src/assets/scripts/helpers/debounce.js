import delay from './delay'
let currentId = null

export default async (callback, threshold) => {
  const id = Math.floor(Math.random() * 1000000)
  currentId = id
  await delay(threshold)
  if (currentId === id) {
    callback()
  }
}
