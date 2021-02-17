import { Graph } from './graph/core/Graph'
import { Vertex } from './graph/core/Vertex'

var grafo = new Graph()

grafo.addVertex('A')
grafo.addVertex('B')
grafo.addVertex('C')
grafo.addVertex('D')

grafo.connectVertex('A', 'B')
grafo.connectVertex('A', 'C')
grafo.connectVertex('A', 'D')

console.log(`Grau do vertice A: ${grafo.getVertex('A').GetDegree()}`)
console.log(`Grau do vertice D: ${grafo.getVertex('D').GetDegree()}`)
console.log(`Grau do vertice C: ${grafo.getVertex('C').GetDegree()}`)

console.log('O vertice A possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('A')
adjacentes.forEach(x => console.log(x.GetLabel()))

console.log('O vertice C possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('C')
adjacentes.forEach(x => console.log(x.GetLabel()))
