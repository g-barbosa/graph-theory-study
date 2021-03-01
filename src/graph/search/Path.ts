import hasKey from '../helpers/hasKey'
import getByKey from '../helpers/getByKey'

export class Path {
  private readonly path: Object[] = []

  connect (previous: string, next: string): void {
    const path: Object = { }
    path[previous] = next
    this.path.push(path)
  }

  generate (origin: string, destiny: string): string[] {
    const result: string[] = []
    let node: string = destiny
    while (node !== origin && hasKey(this.path, node)) {
      result.push(node)
      node = getByKey(this.path, node)
    }
    result.push(node)
    return result.reverse()
  }
}
