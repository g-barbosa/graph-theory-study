import { Vertex } from '../core/Vertex'

const getByObjKey = (arr: Object, key: number): Vertex[] => (arr[Object.keys(arr)[key]]) ?? {}

export default getByObjKey
