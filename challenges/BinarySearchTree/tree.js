/* eslint-disable no-undef */
'user strict';
const Tree = require('../../Data-Structures/tree/tree.js');

class BinarySearchTree extends Tree {
  constructor(tree) {
    super(tree);
  }
  breadthFirstTraversal(tree) {
    let resulte = [];
    let childs = [];
    let node = tree.root;
    if (!node) return 'the tree is empty';
    childs.push(node);
    while (childs.length) {
      let tempNode = childs.shift();
      resulte.push(tempNode.value);
      if (tempNode.left) childs.push(tempNode.left);
      if (tempNode.right) childs.push(tempNode.right);
    }
    return resulte;
  }
  findMaximumValue() {
    let results = null;
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results = results < node.value ? node.value : results;
    };
    if (this.root) {
      _traversal(this.root);
    }
    return results;
  }
}

module.exports = BinarySearchTree;
