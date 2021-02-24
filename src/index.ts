import { Graph } from './graph/core/Graph'
import { Vertex } from './graph/core/Vertex'
import { DeepSearch } from './graph/search/DeepSearch'
import { WidthSearch } from './graph/search/WidthSearch'

var grafo = new Graph()

grafo.addVertex('A')
grafo.addVertex('B')
grafo.addVertex('C')
grafo.addVertex('D')
grafo.addVertex('E')
grafo.addVertex('F')
grafo.addVertex('G')
grafo.addVertex('H')
grafo.addVertex('I')

grafo.connectVertex('A', 'B')
grafo.connectVertex('A', 'C')
grafo.connectVertex('A', 'D')
grafo.connectVertex('B', 'F')
grafo.connectVertex('B', 'I')
grafo.connectVertex('D', 'E')
grafo.connectVertex('D', 'I')
grafo.connectVertex('D', 'G')
grafo.connectVertex('I', 'A')
grafo.connectVertex('I', 'D')
grafo.connectVertex('I', 'C')
grafo.connectVertex('I', 'H')
grafo.connectVertex('E', 'A')

console.log(`Grau do vértice A: ${grafo.getVertex('A').GetDegree()}`)
console.log('O vértice A possui as seguintes adjacencias: ')
var adjacentes: Vertex[] = grafo.getAdjacencies('A')
adjacentes.forEach(vertex => console.log(vertex.GetLabel() + ' '))

var deep = new DeepSearch()
var width = new WidthSearch()

var path: string[] = deep.search(grafo, 'D', 'H')
console.log('Caminho feito por uma busca em profundidade:')
path.forEach(step => console.log(step + ' '))

var path: string[] = width.search(grafo, 'B', 'G')
console.log('Caminho feito por uma busca em largura:')
path.forEach(step => console.log(step + ' '))

var tree: Graph = grafo.spanningTree()
console.log()
console.log('--- Árvore geradora ---')
console.log('Vértices')
tree.getVeritices().forEach(v => console.log('\t' + v.GetLabel()))
console.log('Arestas')
tree.getVeritices().forEach(v => {
  tree.getAdjacencies(v.GetLabel()).forEach(adj => console.log('\t', v.GetLabel() + adj.GetLabel()))
})
