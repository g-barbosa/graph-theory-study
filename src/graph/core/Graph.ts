import { Map } from './Map'
import { Vertex } from './Vertex'

export class Graph {
  private readonly vertices: Vertex[]
  private readonly labelIndex: Map = { Key: '', Value: 0 }
  private readonly verticeMaxQnt: number = 10
  // private isQtdMaxVerticeDefinida: boolean = false
  private verticeCurrentQnt: number = 0

  constructor () {
    this.vertices = []
  }

  addVertex (rotulo: string): void {
    if (this.verticeCurrentQnt <= this.verticeMaxQnt - 1) {
      var novoVertice: Vertex = new Vertex(rotulo)
      this.vertices.push(novoVertice)
      this.labelIndex.Key = rotulo
      this.labelIndex.Value = this.verticeMaxQnt
      this.verticeCurrentQnt = this.verticeCurrentQnt + 1
    } else {
      throw new Error(`A quantidade de vértices permitida ${this.verticeMaxQnt} foi excedida.`)
    }
  }

  getVeritices (): Vertex[] {
    return this.vertices
  }
}