export class Vertice {
  private readonly label: string
  // private readonly grau: number

  constructor (label: string) {
    this.label = label
  }

  GetLabel (): string {
    return this.label
  }
}
