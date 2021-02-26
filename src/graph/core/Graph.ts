import { AdjacencyMatrix } from './AdjacencyMatrix'
import { Vertex } from './Vertex'

export class Graph {
  private readonly vertices: Vertex[]
  private readonly labelIndex: Object = { }
  private readonly verticeMaxQnt: number = 10
  private adjacencyMatrix?: AdjacencyMatrix
  private verticeCurrentQnt: number = 0

  constructor () {
    this.vertices = []
    this.adjacencyMatrix = undefined
  }

  getWeight (initalVertexLabel: string, finalVertexLabel: string): any {
    var initialVertexIndex: number = this.labelIndex[initalVertexLabel]
    var finalVertexIndex: number = this.labelIndex[finalVertexLabel]
    return this.adjacencyMatrix?.getWeigth(initialVertexIndex, finalVertexIndex)
  }

  addVertex (label: string): void {
    if (this.verticeCurrentQnt <= this.verticeMaxQnt - 1) {
      var novoVertice: Vertex = new Vertex(label)
      this.vertices.push(novoVertice)
      this.labelIndex[label] = this.verticeCurrentQnt
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

  connectVertex (labelInitialVertex: string, labelFinalVertex: string, weight?: number): void {
    this.createAdjacencyMatrix()
    var indexInitialVertex: number = this.labelIndex[labelFinalVertex]
    var indexFinalVertex: number = this.labelIndex[labelInitialVertex]
    if (this.adjacencyMatrix !== undefined) {
      this.adjacencyMatrix.addEdge(indexInitialVertex, indexFinalVertex, weight)
    }
  }

  getAdjacencies (vertex: string): Vertex[] {
    var vertexIndex: number = this.labelIndex[vertex]
    if (this.adjacencyMatrix) {
      return this.adjacencyMatrix.getAdjacency(vertexIndex)
    }
    return this.vertices
  }

  createAdjacencyMatrix (): void {
    if (this.adjacencyMatrix === undefined) {
      this.adjacencyMatrix = new AdjacencyMatrix(this.vertices)
    } else {
      var vertexInMatrixQtd: number = this.adjacencyMatrix.getVertexQtd()
      if (this.vertices.length !== vertexInMatrixQtd) {
        var adjacencyMatrixTemp: AdjacencyMatrix = new AdjacencyMatrix(this.vertices)
        this.adjacencyMatrix.copyValuesTo(adjacencyMatrixTemp)
        this.adjacencyMatrix = adjacencyMatrixTemp
      }
    }
  }

  getNextVertex (vertex: Vertex, visitedVertices: string[]): any {
    var adjacencies: Vertex[] = this.getAdjacencies(vertex.GetLabel())
    for (var i = 0; i < adjacencies.length; i++) {
      var adjacency: Vertex = adjacencies[i]
      var notVisited: Boolean = !visitedVertices.includes(adjacency.GetLabel())
      if (notVisited) {
        return adjacency
      }
    }
    return null
  }

  spanningTree (): Graph {
    var tree: Graph = new Graph()
    var stack: Vertex[] = []
    var visitedVertices: string[] = []
    var vertices: Vertex[] = this.getVeritices()

    vertices.forEach(v => {
      tree.addVertex(v.GetLabel())
    })

    var initialVertex: Vertex = vertices[0]
    visitedVertices.push(initialVertex.GetLabel())
    stack.push(initialVertex)

    while (stack.length > 0) {
      var analisedVertex: Vertex = stack[stack.length - 1]
      var nextVertex: Vertex = this.getNextVertex(analisedVertex, visitedVertices)
      if (nextVertex === null || nextVertex === undefined) {
        stack.pop()
      } else {
        var label: string = nextVertex.GetLabel()
        visitedVertices.push(label)
        stack.push(nextVertex)
        tree.connectVertex(analisedVertex.GetLabel(), nextVertex.GetLabel(), undefined)
      }
    }
    return tree
  }

  getIndexLabels (): Object {
    return this.labelIndex
  }

  getAdjacencyMatrix (): any {
    return this.adjacencyMatrix
  }
}
