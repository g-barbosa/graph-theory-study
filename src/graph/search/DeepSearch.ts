import { Graph } from '../core/Graph'
import { Path } from './Path'

export class DeepSearch {
  search (graph: Graph, origin: string, destiny: string): string[] {
    var stack: string[] = []
    var visitedVertices: string[] = []
    var path: Path = new Path()

    stack.push(origin)

    while (stack.length > 0) {
      var v: any = stack.pop()
      if (v === destiny) {
        break
      }

      graph.getAdjacencies(v).forEach(u => {
        var label: string = u.GetLabel()
        if (!visitedVertices.includes(label)) {
          visitedVertices.push(label)
          path.connect(label, v)
          stack.push(label)
        }
      })
    }
    return path.generate(origin, destiny)
  }
}
