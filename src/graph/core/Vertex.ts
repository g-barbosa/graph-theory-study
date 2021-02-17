export class Vertex {
  private readonly label: string
  public degree: number

  constructor (label: string) {
    this.label = label
    this.degree = 0
  }

  GetLabel (): string {
    return this.label
  }

  AddDegree (): void {
    this.degree++
  }

  GetDegree (): number {
    return this.degree
  }
}
