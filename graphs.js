// Types of Graphs

/**
 * 1. Vertex and Edges List
 * This stores the list of nodes/vertices and the edges of the list in two diff arrays
 * Time complexity to find Adjacent Node is O(e)
 * Time to check if two nodes are connected O(e)
 * Space complexity O(v + e)
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

// find adjacent nodes - given a node find all nodes it's connected to
const findAdjacentNodes = (node) => {
    // loop through edges array
    // Is my node in any of them
    //if yes, push to list of adjacent arrays
    
    const adjacentNodes = []

    for (let edge of edges) {
        // check if an edge contains node
        const nodeIndex = edge.indexOf(node)
        
        // if it does, push its adjacent to adjacentNodes
        if (nodeIndex > -1) {
            adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
            adjacentNodes.push(adjacentNode)
        }
    }
    return adjacentNodes
}

// check if two nodes are connected
const isConnected = (node1, node2) => {
    // using some cause it will stop running once true
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
}

console.log(findAdjacentNodes('A'))
console.log(isConnected('A','D'))




/**
 * 2. Adjacent Matrix
 * This stores list of nodes and a 2D array of 0 and 1's 
 * indicating connection of a node represented by an array to another node
 * 
 * Time complexity to fin Adjacent nodes O(v)
 * Time complexity checking if nodes are connected O(1) 
 * Space complexity is O(v^2)
 * 
 * Only use this if the connections are plenty
 * and the data is plenty
 */

const matrixVertices = ['A','B','C','D','E']

const adjacencyMatrix = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0],
]

// to keep calculations from been expensive
// create an object map for nodes and their index
const nodeIndexMap = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4
}
const adjacentNodesFromMatrix = (node) => {
    // use index of node in index map
    // to get index matrix and map to return 
    // adjacent nodes

    const adjacentNodes = []
    const nodeConnections = adjacencyMatrix[nodeIndexMap[node]]
    for (let connection in nodeConnections) {
        if (nodeConnections[connection] === 1) {
          adjacentNodes.push(matrixVertices[connection])
        }
    }
    return adjacentNodes
}

const isConnectedNodesFromMatrix = (node1, node2) => {
    // check the index of node2 in the adjacent matrix array of node1
    const nodeIndex1 = nodeIndexMap[node1]
    const nodeIndex2 = nodeIndexMap[node2]

    return !!adjacencyMatrix[nodeIndex1][nodeIndex2]
}



console.log(adjacentNodesFromMatrix('B'))
console.log(isConnectedNodesFromMatrix('A', 'E'))





/**
 * 3. Adjacency Lists
 * This stores the list of nodes a node is connected to.
 * Time complexity to find Adjacent Node is O(1)
 * Time to complexity to check if a node is connected is O(log(v)) - where v is the number of nodes
 * Space complexity is O(e) - where e is the number of edges
 */

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