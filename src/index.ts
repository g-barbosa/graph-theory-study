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
console.log(`Grau do vertice B: ${grafo.getVertex('B').GetDegree()}`)
console.log(`Grau do vertice C: ${grafo.getVertex('C').GetDegree()}`)
console.log(`Grau do vertice D: ${grafo.getVertex('D').GetDegree()}`)

console.log('O vertice A possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('A')
adjacentes.forEach(vertices => console.log(vertices.GetLabel() + ' '))

console.log('O vertice B possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('B')
adjacentes.forEach(vertices => console.log(vertices.GetLabel() + ' '))

console.log('O vertice C possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('C')
adjacentes.forEach(vertices => console.log(vertices.GetLabel() + ' '))

console.log('O vertice D possui as seguintes adjacencias:')
var adjacentes: Vertex[] = grafo.getAdjacencies('D')
adjacentes.forEach(vertices => console.log(vertices.GetLabel() + ' '))
