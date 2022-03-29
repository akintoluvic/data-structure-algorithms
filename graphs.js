// Types of Graphs

/**
 * 1. Vertex and Edges List
 * This stores the list of nodes/vertices and the edges of the list in two diff arrays
 * Time complexity to find Adjacent Node is O(e)
 */

const vertices = ['A','B','C','D','E']

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B','C'],
    ['C', 'D'],
    ['C','E'],
    ['D','E']
]

/**
 * 2. Adjacent Matrix
 */

/**
 * 3. Adjacency Lists
 * This stores the list of nodes a node is connected to.
 * Time complexity to find Adjacent Node is O(1)
 * Time to complexity to check if a node is connected is O(log(v)) - where v is the number of nodes
 * Space complexity is O(e) - where e is the number of edges
 */

// const adjacentVertices = ['a', 'b', 'c', 'd', 'e'];

// const adjacencyList = [
//     ['b', 'd'],
//     ['a', 'c'],
//     ['b', 'd', 'e'],
//     ['a', 'c', 'e'],
//     ['c', 'd'],
// ]
class AdjacentNode {
    constructor(value) {
        this.value = value;
        this.edgesList = [];
    }

    // add connection to a node and connect the node to this
    connectNode(node) {
        this.edgesList.push(node)
        node.edgesList.push(this)
    }

    // get adjacent nodes to this node
    getAdjacentNodes() {
        return this.edgesList.map(edge => edge.value)
    }

    isConnected(node) {
        // the map is expensive, you need to optimise
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1
    }
}

class AdjacentGraph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }
    addNodeToGraph(node) {
        this.nodes.push(node)
    }
}

const nodeA = new AdjacentNode('A');
const nodeB = new AdjacentNode('B');
const nodeC = new AdjacentNode('C');
const nodeD = new AdjacentNode('D');
const nodeE = new AdjacentNode('E');

const adjacentGraph = new AdjacentGraph([nodeA,nodeB,nodeC,nodeD, nodeE])

// connecting nodes
nodeA.connectNode(nodeB)
nodeA.connectNode(nodeD)
nodeB.connectNode(nodeC)
nodeC.connectNode(nodeD)
nodeC.connectNode(nodeE)
nodeD.connectNode(nodeE)

// for(node of adjacentGraph.nodes) {
//     console.log(`Node ${node.value}`)
//     for(edge of node.edgesList) {
//         console.log(`Node ${node.value} is connected to ${edge.value}`)
//     }
// }

console.log(nodeA.getAdjacentNodes())
console.log(nodeB.isConnected(nodeC))