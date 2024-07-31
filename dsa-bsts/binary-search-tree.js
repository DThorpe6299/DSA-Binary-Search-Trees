class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  find(val){
    let currentNode = this;
    while(currentNode){
        if(currentNode.val === val) return currentNode;
        if(currentNode.val>val && currentNode.left !== null){
            currentNode = currentNode.left;
        }else if(currentNode.val<val && currentNode.right !== null){
            currentNode = currentNode.right;
        }else{
          return;
        }
    }
  }

  findRecursively(val) {
    if(this.val===val) return this;
    if(this.val>val && this.left !== null){
        return this.left.findRecursively(val);
    }else if(this.val<val && this.right !== null){
        return this.right.findRecursively(val);
    }else{
        return;
    }
  }

  dfsPreOrder(){
    let visitedNodes = [];
    function traverse(node){
      if(!node) return;

      visitedNodes.push(node.val);

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this);
    return visitedNodes;
  }

  dfsInOrder(){
    let visitedNodes = [];
    function traverse(node){
      if(!node) return;

      traverse(node.left)
      visitedNodes.push(node.val);

      traverse(node.right);
    }
    traverse(this);
    return visitedNodes;
  }

  dfsPostOrder(){
    let visitedNodes = [];
    function traverse(node){
      if(!node) return;

      traverse(node.left);
      traverse(node.right)
      visitedNodes.push(node.val)
    }
    traverse(this);
    return visitedNodes;
  }

  bfs() {
    let visitedNodes = [];
    let queue = [this];

    while(queue.length) {
      let currentNode = queue.shift();
      visitedNodes.push(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    
    return visitedNodes;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if(!this.root){
      this.root=newNode;
      return this;
    }

    let current = this.root;
    while(current){
      if(val<current.val){
        if(!current.left){
          current.left=newNode;
          return this;
        }
        current = current.left
      }else{
        if(!current.right){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (!node) {
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      node.right = this.insertRecursively(val, node.right);
    }

    if (node === this.root) {
      return this;
    } else {
      return node;
    }
  
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return;
    return this.root.find(val);
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root===null) return null;
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if(this.root===null) return null;
    return this.root.dfsPreOrder()
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) return null;
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) return null;
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) return null;
    return this.root.bfs();
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
