"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
class GraphNode {
    data;
    adjNodes;
    comparator;
    constructor(data, comparator) {
        this.data = data;
        this.adjNodes = new Array();
        this.comparator = comparator;
    }
    addNewNeighbour(node) {
        this.adjNodes.push(node);
    }
    removeNeighbour(data) {
        let index = this.adjNodes.findIndex(node => this.comparator(node.data, data) == 0);
        if (index != -1) {
            return this.adjNodes.splice(index, 1)[0];
        }
        return null;
    }
}
class Graph {
    nodes = new Map();
    comparator;
    root;
    size;
    constructor(comparator, data) {
        this.comparator = this.comparator;
        this.root = new GraphNode(data, comparator);
        this.size = 0;
    }
    addNewNode(data) {
        let node = this.nodes.get(data);
        if (node != null)
            return node;
        node = new GraphNode(data, this.comparator);
        this.nodes.set(data, node);
        this.size++;
        return node;
    }
    removeNode(data) {
        let nodeToRemove = this.nodes.get(data);
        this.nodes.forEach((node) => {
            // if nodeToRemove is not undefined and if node in graph contains nodeToRemove in list of adjacent nodes
            if (nodeToRemove && node.adjNodes.includes(nodeToRemove)) {
                node.removeNeighbour(nodeToRemove.data);
            }
        });
        this.nodes.delete(data);
        this.size--;
        return nodeToRemove;
    }
    addEdge(source, destination) {
        let sourceNode = this.addNewNode(source);
        let destinationNode = this.addNewNode(destination);
        sourceNode.addNewNeighbour(destinationNode);
    }
    removeEdge(source, destination) {
        let sourceNode = this.nodes.get(source);
        let destinationNode = this.nodes.get(destination);
        if (sourceNode && destinationNode) {
            sourceNode.removeNeighbour(destinationNode.data);
        }
    }
    breathFirstSearch() {
        const visited = new Array(this.size).fill(false);
        const queue = new queue_1.default();
        console.log(visited);
    }
}
function comparator(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
const graph = new Graph(comparator, 1);
graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 2);
graph.addEdge(3, 5);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);
graph.breathFirstSearch();
