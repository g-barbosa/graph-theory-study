import { Digraph } from './graph/core/Digraph'
import { Graph } from './graph/core/Graph'
import { Vertex } from './graph/core/Vertex'
// import { DeepSearch } from './graph/search/DeepSearch'
// import { WidthSearch } from './graph/search/WidthSearch'
/*
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
*/
console.log('-----------------------------------------------')
var digraph: Digraph = new Digraph()

digraph.addVertex('RJ')
digraph.addVertex('SP')
digraph.addVertex('BH')
digraph.addVertex('PT')
digraph.addVertex('OS')
digraph.addVertex('SV')
digraph.addVertex('CR')
digraph.addVertex('PA')

digraph.connectVertex('RJ', 'SP', undefined)
digraph.connectVertex('RJ', 'BH', undefined)
digraph.connectVertex('RJ', 'PT', undefined)
digraph.connectVertex('RJ', 'PA', undefined)
digraph.connectVertex('SP', 'BH', undefined)
digraph.connectVertex('SP', 'OS', undefined)
digraph.connectVertex('SP', 'SV', undefined)
digraph.connectVertex('SP', 'CR', undefined)
digraph.connectVertex('SP', 'PA', undefined)
digraph.connectVertex('SV', 'PA', undefined)
digraph.connectVertex('CR', 'PA', undefined)

var tree: Graph = digraph.spanningTreeByDeepRoot('PT')
console.log('--- Arvore geradora via buasca por profundidade usando raiz ---')
console.log()
tree.getVeritices().forEach(v => {
  console.log(`Vértice ${v.GetLabel()} conectado a:`)
  var adjacencies: Vertex[] = tree.getAdjacencies(v.GetLabel())
  if (adjacencies.length > 0) {
    adjacencies.forEach(adj => {
      console.log(adj.GetLabel())
    })
  } else {
    console.log('-')
  }
  console.log()
})
