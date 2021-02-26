import { AdjacencyMatrix } from './AdjacencyMatrix'
import { Graph } from './Graph'

export class Digraph extends Graph {
  connectVertex (initialVertexLabel: string, finalVertexLabel: string, weight: number): void {
    var indexLabels: Object = super.getIndexLabels
    super.createAdjacencyMatrix()
    var adjacencyMatrix: AdjacencyMatrix = this.getAdjacencyMatrix()
    var initialVertexIndex: number = indexLabels[initialVertexLabel]
    var finalVertexIndex: number = indexLabels[finalVertexLabel]
    adjacencyMatrix.addTargetedEdge(initialVertexIndex, finalVertexIndex, weight)
  }
}
