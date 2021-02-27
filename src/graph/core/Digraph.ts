import getByObjKey from '../util/getObjectByKey'
import { AdjacencyMatrix } from './AdjacencyMatrix'
import { Graph } from './Graph'
import { Vertex } from './Vertex'

export class Digraph extends Graph {
  connectVertex (initialVertexLabel: string, finalVertexLabel: string, weight?: number): void {
    var indexLabels: Object = super.getIndexLabels()
    super.createAdjacencyMatrix()
    var adjacencyMatrix: AdjacencyMatrix = this.getAdjacencyMatrix()
    var initialVertexIndex: number = indexLabels[initialVertexLabel]
    var finalVertexIndex: number = indexLabels[finalVertexLabel]
    adjacencyMatrix.addTargetedEdge(initialVertexIndex, finalVertexIndex, weight)
  }

  spanningTreeByDeep (): Graph {
    var root: string = super.getVeritices()[0].GetLabel()
    return this.spanningTreeByDeepRoot(root)
  }

  spanningTreeByDeepRoot (root: string): Graph {
    var toVisit: string[] = []
    var tree: Digraph = new Digraph()
    var vertices: Vertex[] = super.getVeritices()
    var adjacencyMatrix: AdjacencyMatrix = super.getAdjacencyMatrix()
    var indexLabels: Object = super.getIndexLabels()
    var rootIndex: number = getByObjKey(indexLabels, root)[root]

    vertices.forEach(v => {
      toVisit.push(v.GetLabel())
    })

    if (root === undefined) {
      root = vertices[0].GetLabel()
    }
    const index = toVisit.indexOf(root)
    toVisit.splice(index, 1)
    tree.addVertex(root)
    this.visit(root, toVisit, tree)

    while (toVisit.length > 0) {
      if (!adjacencyMatrix.hasAncestors(rootIndex)) {
        break
      }
      var ancestor: string = 'null'
      for (var a of adjacencyMatrix.getAncestors(rootIndex)) {
        if (toVisit.includes(a.GetLabel())) {
          ancestor = a.GetLabel()
        }
      }
      if (ancestor === null) {
        throw new Error('todos os ancestrais da raiz já foram visitados')
      }

      const index = toVisit.indexOf(ancestor)
      toVisit.splice(index, 1)
      tree.addVertex(ancestor)
      tree.connectVertex(ancestor, root, undefined)
      root = ancestor
      rootIndex = getByObjKey(indexLabels, root)[root]
      this.visit(root, toVisit, tree)
    }
    return tree
  }

  visit (chain: string, toVisit: string[], tree: Digraph): void {
    for (var neighbor of super.getAdjacencies(chain)) {
      var label: string = neighbor.GetLabel()
      if (!toVisit.includes(label)) {
        continue
      }
      tree.addVertex(label)
      tree.connectVertex(chain, label, undefined)
      const index = toVisit.indexOf(label)
      toVisit.splice(index, 1)
      this.visit(label, toVisit, tree)
    }
  }
}
