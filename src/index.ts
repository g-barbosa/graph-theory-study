import { Graph } from './graph/core/Graph'

var grafo = new Graph()

grafo.addVertex('RJ')
grafo.addVertex('BH')
grafo.addVertex('SP')
grafo.addVertex('MG')

console.log('O grafo g possui os seguintes vertices:')
var teste = grafo.getVeritices()
teste.forEach(g => console.log(g.GetLabel()))
