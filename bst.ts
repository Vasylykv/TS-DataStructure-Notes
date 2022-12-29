// null == undefined -> true
import Queue from "../queue";

class BSTNode {
  public value: number;
  public right: BSTNode;
  public left: BSTNode;
  
  constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  public root: BSTNode;

  public isEmpty(): boolean {
    return this.root == null;
  }

  public add(value: number) {
    if (this.isEmpty()) {
      this.root= new BSTNode(value);
    } else {
      this.addAux(value, this.root);
    }
  }

  private addAux(value: number, treeNode: BSTNode) {
    if (value > treeNode.value) {

      if (treeNode.right != null) 
        this.addAux(value, treeNode.right);
      else 
        treeNode.right = new BSTNode(value);
      
    } else if (value <= treeNode.value) {
      if (treeNode.left != null) 
        this.addAux(value, treeNode.left);
      else
        treeNode.left = new BSTNode(value);
    }
  }

  public contains(value: number): boolean {
    if (this.isEmpty()) return false;
    return this.containsAux(value, this.root);
  }

  private containsAux(value: number, treeNode: BSTNode): boolean {
    if (treeNode == null) return false;

    if (value > treeNode.value) {
      return this.containsAux(value, treeNode.right);
    }
    else if (value < treeNode.value)
      return this.containsAux(value, treeNode.left);
    else
      return true;
  }

  public remove(value: number) {
    if (this.root == null) return;
    this.root = this.removeAux(value, this.root);
  }

  private removeAux(value: number, treeNode: BSTNode): BSTNode {
    if (treeNode == null) return null;

    if (value > treeNode.value)
      treeNode.right = this.removeAux(value, treeNode.right);
    else if (value < treeNode.value)
      treeNode.left = this.removeAux(value, treeNode.left);
    else {
      if (treeNode.left != null && treeNode.right != null) {
        const tmp = treeNode;
        const leftMost = this.getLeftMost(tmp.right);
        treeNode.value = leftMost.value;
        treeNode.right = this.removeAux(leftMost.value, treeNode.right);
      }
      else if (treeNode.left != null)
        treeNode = treeNode.left;
      else if (treeNode.right != null)
        treeNode = treeNode.right;
      else
        treeNode = null;
    }

    return treeNode;
  }

  private getLeftMost(treeNode: BSTNode): BSTNode {
    if (treeNode == null) return null;
    let tmp = treeNode;
    while (tmp.left != null) {
      tmp = tmp.left;
    }
    return tmp;
  }

  public inorderTraversal() {
    const traverseRecursive = (current: BSTNode) => {
      if (current == null) return;
      traverseRecursive(current.left);
      console.log(current.value); 
      traverseRecursive(current.right);
    }

    traverseRecursive(this.root);
  }

  public preorderTraversal() {
    const traverseRecursive = (current: BSTNode) => {
      if (current == null) return;
      console.log(current.value);
      traverseRecursive(current.left);
      traverseRecursive(current.right);
    }

    traverseRecursive(this.root);
  }

  public postorderTraversal() {
    const traverseRecursive = (current: BSTNode) => {
      if (current == null) return;
      traverseRecursive(current.left);
      traverseRecursive(current.right);
      console.log(current.value);
    }

    traverseRecursive(this.root);
  }

  public levelOrderTraversal() {
    if (this.root == null) return;
    const queue = new Queue<BSTNode>();
    queue.enqueue(this.root);
    while (!queue.isEmpty) {
      let current = queue.dequeue();
      console.log(current.value);
      if (current.left != null)
        queue.enqueue(current.left);
      if (current.right != null)
        queue.enqueue(current.right);
    }
  }
}

const tree = new BinarySearchTree();

tree.add(20);
tree.add(25);
tree.add(21);
tree.add(10);
tree.add(12);
tree.add(30);
tree.add(5);
tree.add(40);
tree.add(3);
tree.add(6);

// console.log(tree.root.value);

// tree.inorderTraversal();
// tree.preorderTraversal();
// tree.postorderTraversal();

tree.levelOrderTraversal();