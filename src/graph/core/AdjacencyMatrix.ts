import { Vertex } from './Vertex'

export class AdjacencyMatrix {
  private readonly matrix: number[][]
  private readonly vertices: Vertex[]
  private readonly vertexQtd: number

  constructor (vertices: Vertex[]) {
    this.vertices = vertices
    this.vertexQtd = vertices.length
    this.matrix = Array.from({ length: this.vertexQtd }, () => Array.from({ length: this.vertexQtd }, () => 0))
    for (var i = 0; i < this.matrix.length; i++) {
      for (var j = 0; j < this.matrix[i].length; j++) {
        this.matrix[i][j] = 0
      }
    }
  }

  addEdge (initalVertexIndex: number, finalVertexIndex: number): void {
    var initialVertex: Vertex = this.vertices[initalVertexIndex]
    var finalVertex: Vertex = this.vertices[finalVertexIndex]

    if (initialVertex === finalVertex) {
      this.matrix[initalVertexIndex][initalVertexIndex] = 1
      initialVertex.AddDegree()
    } else {
      this.matrix[initalVertexIndex][finalVertexIndex] = 1
      initialVertex.AddDegree()
      this.matrix[finalVertexIndex][initalVertexIndex] = 1
      finalVertex.AddDegree()
    }
  }

  getAdjacency (vertexIndex: number): Vertex[] {
    var line: number = vertexIndex
    var adjacency: Vertex[] = []
    for (var j = 0; j < this.vertices.length; j++) {
      if (this.matrix[line][j] === 1) {
        var vertex: Vertex = this.vertices[j]
        adjacency.push(vertex)
      }
    }
    return adjacency
  }
}
