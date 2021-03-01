import { Vertex } from '../core/Vertex'

export class Info {
  public distance: number
  public predecessor?: Vertex
  constructor (distance: number, predecessor?: Vertex) {
    this.distance = distance
    this.predecessor = predecessor
  }
}
