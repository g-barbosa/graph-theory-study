import { AdjacencyMatrix } from './AdjacencyMatrix'
import { Vertex } from './Vertex'

export class Graph {
  private readonly vertices: Vertex[]
  private readonly labelIndex: Object = { }
  private readonly verticeMaxQnt: number = 10
  private adjacencyMatrix: AdjacencyMatrix
  private verticeCurrentQnt: number = 0

  constructor () {
    this.vertices = []
    this.adjacencyMatrix = new AdjacencyMatrix(this.vertices)
  }

  addVertex (label: string): void {
    if (this.verticeCurrentQnt <= this.verticeMaxQnt - 1) {
      var novoVertice: Vertex = new Vertex(label)
      this.vertices.push(novoVertice)
      this.labelIndex[label] = this.verticeMaxQnt
      this.verticeCurrentQnt = this.verticeCurrentQnt + 1
    } else {
      throw new Error(`A quantidade de vértices permitida ${this.verticeMaxQnt} foi excedida.`)
    }
  }

  getVeritices (): Vertex[] {
    return this.vertices
  }

  getVertex (label: string): Vertex {
    var index: number = this.labelIndex[label]
    return this.vertices[index]
  }

  connectVertex (labelInitialVertex: string, labelFinalVertex: string): void {
    this.createAdjacencyMatrix()
    var indexInitialVertex: number = this.labelIndex[labelFinalVertex]
    var indexFinalVertex: number = this.labelIndex[labelInitialVertex]
    this.adjacencyMatrix.addEdge(indexInitialVertex, indexFinalVertex)
  }

  getAdjacencies (vertex: string): Vertex[] {
    var vertexIndex: number = this.labelIndex[vertex]
    return this.adjacencyMatrix.getAdjacency(vertexIndex)
  }

  createAdjacencyMatrix (): void {
    if (this.adjacencyMatrix == null) {
      this.adjacencyMatrix = new AdjacencyMatrix(this.vertices)
    }
  }
}
