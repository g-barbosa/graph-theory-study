const hasObjKey = (obj: Object, key: any): Boolean => {
  let result: Boolean = false
  if (obj[key] !== undefined) {
    result = true
  }

  return result
}

export default hasObjKey
