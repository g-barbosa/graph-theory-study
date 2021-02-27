import { Vertex } from '../core/Vertex'

const getByObjKey = (arr: Object, key: any): Vertex[] => (arr[Object.keys(arr)[key]]) ?? {}

export default getByObjKey
