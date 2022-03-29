// Types of Graphs



/**
 * 3. Adjacency Lists
 * This stores the list of nodes a node is connected to.
 * Time complexity to find Adjacent Node is O(1)
 * Time complexity to add a node is O(1)
 * Time to complexity to check if a node is connected is O(1)
 * Space complexity is O(n)
 */

const adjacentVertices = ['a', 'b', 'c', 'd', 'e'];

const adjacencyList = [
    ['b', 'd'],
    ['a', 'c'],
    ['b', 'd', 'e'],
    ['a', 'c', 'e'],
    ['c', 'd'],
]