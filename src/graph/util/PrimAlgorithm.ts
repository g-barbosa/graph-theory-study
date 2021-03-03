import { Digraph } from '../core/Digraph'
import { Graph } from '../core/Graph'

export class PrimAlgorithm {
  private candidates: Object
  private toConnect: string[]

  constructor () {
    this.candidates = {}
    this.toConnect = []
  }

  process (root: string, graph: Graph): Digraph {
    this.toConnect = []
    for (var vertex of graph.getVeritices()) {
      this.toConnect.push(vertex.GetLabel())
    }

    var mst: Digraph = new Digraph()
    mst.addVertex(root)

    const index = this.toConnect.indexOf(root)
    if (index > -1) {
      this.toConnect.splice(index, 1)
    }

    this.candidates = {}
    this.updateCandidates(graph, root)

    while (this.toConnect.length > 0) {
      var bestU: any
      var bestV: any
      var shorttestDistance: number = Number.MAX_SAFE_INTEGER

      for (var u of Object.keys(this.candidates)) {
        var v: string = this.candidates[u]
        var weight = graph.getWeight(u, v)
        if (weight < shorttestDistance) {
          bestU = u
          bestV = v
          shorttestDistance = weight
        }
      }

      if (shorttestDistance === Number.MAX_SAFE_INTEGER) {
        break
      }

      mst.addVertex(bestV)
      mst.connectVertex(bestU, bestV, shorttestDistance)
      const index = this.toConnect.indexOf(bestV)
      if (index > -1) {
        this.toConnect.splice(index, 1)
      }

      this.updateCandidates(graph, bestU)
      this.updateCandidates(graph, bestV)
      return mst
    }
    return mst
  }

  updateCandidates (graph: Graph, vertex: string): void {
    var shortestDistance: number = Number.MAX_SAFE_INTEGER
    var mostClose: any
    for (var adj of graph.getAdjacencies(vertex)) {
      var weight: number = graph.getWeight(vertex, adj.GetLabel())
      if (this.toConnect.includes(adj.GetLabel()) && weight < shortestDistance) {
        shortestDistance = weight
        mostClose = adj.GetLabel()
      }
    }
    if (mostClose !== undefined) {
      this.candidates[vertex] = mostClose
    } else {
      const index = this.toConnect.indexOf(vertex)
      if (index > -1) {
        this.toConnect.splice(index, 1)
      }
    }
  }
}
