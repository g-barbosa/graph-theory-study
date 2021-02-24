const hasObjKey = (obj: Object, key: number): Boolean => {
  let result: Boolean = false
  if (obj[key] !== undefined) {
    result = true
  }

  return result
}

export default hasObjKey
