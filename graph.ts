import Queue from "./queue";

class GraphNode<T> {
  data: T;
  adjNodes: GraphNode<T>[];
  comparator: (a: T, b: T) => number;

  constructor(data: T, comparator: (a: T, b: T) => number) {
    this.data = data;
    this.adjNodes = new Array<GraphNode<T>>();
    this.comparator = comparator;
  }

  addNewNeighbour(node: GraphNode<T>): void {
    this.adjNodes.push(node);
  }

  removeNeighbour(data: T): GraphNode<T> | null {
    let index = this.adjNodes.findIndex(node => this.comparator(node.data, data) == 0);
    
    if (index != -1) {
      return this.adjNodes.splice(index, 1)[0];
    }

    return null;
  }
}

class Graph<T> {
  nodes: Map<T, GraphNode<T>> = new Map<T, GraphNode<T>>();
  comparator: (a: T, b: T) => number;
  root: GraphNode<T>;
  size: number;

  constructor(comparator: (a: T, b: T) => number, data: T) {
    this.comparator = this.comparator;
    this.root = new GraphNode<T>(data, comparator);
    this.size = 0;
  }
  
  addNewNode(data: T): GraphNode<T> {
    let node = this.nodes.get(data);
    
    if (node != null) return node;

    node = new GraphNode(data, this.comparator);
    this.nodes.set(data, node);
    this.size++;

    return node;
  }

  removeNode(data: T) {
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

  addEdge(source: T, destination: T): void {
    let sourceNode: GraphNode<T> = this.addNewNode(source);
    let destinationNode: GraphNode<T> = this.addNewNode(destination);
  
    sourceNode.addNewNeighbour(destinationNode);
  }

  removeEdge(source: T, destination: T): void {
    let sourceNode: GraphNode<T> | undefined = this.nodes.get(source);
    let destinationNode: GraphNode<T> | undefined = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeNeighbour(destinationNode.data);
    }
  }

  breathFirstSearch() {
    const visited: boolean[] = new Array<boolean>(this.size).fill(false);
    const queue = new Queue<GraphNode<T>>();
    

    console.log(visited);
  }
}

function comparator(a: number, b: number) {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}

const graph: Graph<number> = new Graph<number>(comparator, 1);
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


