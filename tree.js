class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    }
    return this;
  }
  lookup(value) {}
}

let tree = new BinarySearchTree();
console.log(tree.insert(20));
console.log(tree.insert(40));
console.log(tree.insert(10));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
