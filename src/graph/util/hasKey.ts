const hasKey = (list: Object[], key: string): Boolean => {
  let result: Boolean = false
  list.forEach(l => {
    if (l[key] !== undefined) {
      result = true
    }
  })

  return result
}

export default hasKey
