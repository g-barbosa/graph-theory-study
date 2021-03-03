// import { Digraph } from './graph/core/Digraph'
import { Digraph } from './graph/core/Digraph'
import { Graph } from './graph/core/Graph'
// import { Graph } from './graph/core/Graph'
// import { Vertex } from './graph/core/Vertex'
// import { DeepSearch } from './graph/search/DeepSearch'
// import { WidthSearch } from './graph/search/WidthSearch'
// import { DijkstraAlgorithm } from './graph/util/DijkstraAlgorithm'
// import { Info } from './graph/util/Info'
import { PrimAlgorithm } from './graph/util/PrimAlgorithm'

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

var grafoPonderado: Graph = new Graph()

grafoPonderado.addVertex('A')
grafoPonderado.addVertex('B')
grafoPonderado.addVertex('C')
grafoPonderado.addVertex('D')
grafoPonderado.addVertex('E')

grafoPonderado.connectVertex('A', 'B', 12)
grafoPonderado.connectVertex('C', 'E', 10)
grafoPonderado.connectVertex('B', 'D', 5)
grafoPonderado.connectVertex('D', 'A', 2)
grafoPonderado.connectVertex('B', 'E', 1)
grafoPonderado.connectVertex('A', 'C', 7)

console.log('--- grafo ponderado ---')
var peso: number = grafoPonderado.getWeight('A', 'C')
console.log(`Peso da aresta AC: ${peso}`)
peso = grafoPonderado.getWeight('B', 'E')
console.log(`Peso da aresta BE: ${peso}`)

console.log('--- digrafo ponderado ---')

var digrafoPonderado: Digraph = new Digraph()

digrafoPonderado.addVertex('X')
digrafoPonderado.addVertex('Y')
digrafoPonderado.addVertex('Z')
digrafoPonderado.addVertex('W')
digrafoPonderado.addVertex('V')

digrafoPonderado.connectVertex('X', 'V', 44)
digrafoPonderado.connectVertex('Y', 'W', 37)
digrafoPonderado.connectVertex('W', 'Z', 38)
digrafoPonderado.connectVertex('X', 'V', 16)
digrafoPonderado.connectVertex('V', 'X', 22)
digrafoPonderado.connectVertex('V', 'Y', 57)

console.log('Vertices')
digrafoPonderado.getVeritices().forEach(v => {
  console.log(v.GetLabel())
})

console.log()
console.log('Arestas:')
digrafoPonderado.getVeritices().forEach(v => {
  digrafoPonderado.getAdjacencies(v.GetLabel()).forEach(adj => {
    var peso: number = digrafoPonderado.getWeight(v.GetLabel(), adj.GetLabel())
    console.log(`${v.GetLabel()} ${adj.GetLabel()}: ${peso}`)
  })
})

var graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.connectVertex('A', 'B', 12)
graph.connectVertex('C', 'E', 10)
graph.connectVertex('B', 'D', 5)
graph.connectVertex('D', 'A', 2)
graph.connectVertex('B', 'E', 1)
graph.connectVertex('A', 'C', 7)

var dijkstraAlgorithm = new DijkstraAlgorithm()
var shortestPaths: Object = dijkstraAlgorithm.process('A', 'E', graph)
var keys = Object.keys(shortestPaths)
keys.forEach(key => {
  var info: Info = shortestPaths[key]
  var predecessor = info.predecessor === null ? '' : info.predecessor?.GetLabel()
  console.log(`${key}: ${info.distance} - ${predecessor ?? ''}`)
})
*/
var graph = new Graph()
graph.addVertex('RJ')
graph.addVertex('SP')
graph.addVertex('BH')
graph.addVertex('PT')
graph.addVertex('OS')
graph.addVertex('SV')
graph.addVertex('CR')
graph.addVertex('PA')

graph.connectVertex('RJ', 'SP', 1)
graph.connectVertex('RJ', 'BH', 2)
graph.connectVertex('RJ', 'PT', 3)
graph.connectVertex('RJ', 'PA', 4)
graph.connectVertex('SP', 'BH', 5)
graph.connectVertex('SP', 'OS', 6)
graph.connectVertex('SP', 'SV', 7)
graph.connectVertex('SP', 'CR', 8)
graph.connectVertex('SP', 'PA', 9)
graph.connectVertex('SV', 'PA', 10)
graph.connectVertex('CR', 'PA', 11)

var root: string = 'RJ'
var prim = new PrimAlgorithm()
var mst: Digraph = prim.process(root, graph)
mst.getVeritices().forEach(v => {
  console.log(`O vertice ${v.GetLabel()} é adjacente aos vertices:`)
  mst.getAdjacencies(v.GetLabel()).forEach(adj => {
    var peso: number = mst.getWeight(v.GetLabel(), adj.GetLabel())
    console.log(`${adj.GetLabel()} com peso ${peso}`)
  })
})
