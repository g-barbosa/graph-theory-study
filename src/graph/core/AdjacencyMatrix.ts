import getByObjKey from '../util/getObjectByKey'
import hasObjKey from '../util/hasObjKey'
import { Vertex } from './Vertex'

export class AdjacencyMatrix {
  private readonly matrix: number[][]
  private readonly vertices: Vertex[]
  private readonly vertexQtd: number
  private readonly ancestors: Object

  constructor (vertices: Vertex[]) {
    this.vertices = vertices
    this.vertexQtd = vertices.length
    this.matrix = Array.from({ length: this.vertexQtd }, () => Array.from({ length: this.vertexQtd }, () => 0))
    this.ancestors = { }
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

  addTargetedEdge (initialIndexVertex: number, finalIndexVertex: number, weight: number): void {
    weight = weight === null ? 1 : weight
    var initialVertex: Vertex = this.vertices[initialIndexVertex]
    if (initialIndexVertex === finalIndexVertex) {
      this.matrix[initialIndexVertex][initialIndexVertex] = weight
      initialVertex.AddDegree()
    } else {
      this.matrix[initialIndexVertex][finalIndexVertex] = weight
      var finalVertex: Vertex = this.vertices[finalIndexVertex]
      finalVertex.AddDegree()
    }
    this.addAcestor(finalIndexVertex, initialVertex)
  }

  getWeigth (initialIndexVertex: number, finalIndexVertex: number): number {
    return this.matrix[initialIndexVertex][finalIndexVertex]
  }

  getVertexQtd (): number {
    return this.vertexQtd
  }

  copyValuesTo (destinyMatrix: AdjacencyMatrix): void {
    for (var i = 0; i < this.matrix.length; i++) {
      for (var j = 0; j < this.matrix[i].length; j++) {
        destinyMatrix.writeValueInCell(i, j, this.matrix[i][j])
      }
    }
  }

  writeValueInCell (line: number, column: number, value: number): void {
    this.matrix[line][column] = value
  }

  addAcestor (vertexIndex: number, ancestor: Vertex): void {
    if (getByObjKey(this.ancestors, vertexIndex) === null) {
      var ancestors: Vertex[] = []
      ancestors.push(ancestor)
      this.ancestors[vertexIndex] = ancestors
    } else {
      getByObjKey(this.ancestors, vertexIndex).push(ancestor)
    }
  }

  getAncestors (vertexIndex: number): Vertex[] {
    if (getByObjKey(this.ancestors, vertexIndex) === null) {
      return []
    }
    return getByObjKey(this.ancestors, vertexIndex)
  }

  hasAncestors (vertexIndex: number): Boolean {
    return hasObjKey(this.ancestors, vertexIndex)
  }
}
