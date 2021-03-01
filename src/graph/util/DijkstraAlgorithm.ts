import { Graph } from '../core/Graph'
import hasObjKey from '../helpers/hasObjKey'
import { Info } from './Info'

export class DijkstraAlgorithm {
  process (origin: string, destiny: string, graph: Graph): any {
    try {
      graph.getVertex(origin)
      graph.getVertex(destiny)
    } catch (e) {
      throw new Error(e)
    }

    var vertexInfo: Object = {}
    vertexInfo[origin] = new Info(0, undefined)
    var toVisit: string[] = []
    toVisit.push(origin)

    while (toVisit.length > 0) {
      var bestVertex: any
      var shortestDistance: number = Number.MAX_SAFE_INTEGER
      for (var v of toVisit) {
        var info: Info = vertexInfo[v]
        if (info.distance < shortestDistance) {
          bestVertex = v
          shortestDistance = info.distance
        }
      }
      if (bestVertex === destiny) {
        break
      }

      const index = toVisit.indexOf(bestVertex)
      if (index > -1) {
        toVisit.splice(index, 1)
      }

      for (var neighbor of graph.getAdjacencies(bestVertex)) {
        var label: string = neighbor.GetLabel()
        var weight: number = graph.getWeight(bestVertex, label)
        var distance: number = shortestDistance + weight
        if (hasObjKey(vertexInfo, label)) {
          var info = vertexInfo[label]
          if (distance < info.distance) {
            info.distance = distance
            info.predecessor = graph.getVertex(bestVertex)
          } else {
            vertexInfo[label] = new Info(distance, graph.getVertex(bestVertex))
            toVisit.push(label)
          }
        }
      }
      return vertexInfo
    }
  }
}
