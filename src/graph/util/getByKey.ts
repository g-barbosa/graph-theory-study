const getByKey = (arr: Object[], key: string): string => (arr.find(x => Object.keys(x)[0] === key) ?? {})[key]

export default getByKey
