/* eslint-disable no-undef */
'use strict';
const BinaryTree = require('../../Data-Structures/tree/tree.js');

function FizzBuzzTree (tree) {
  let newTree = new BinaryTree(tree.root);
  const _traversal = (node) => {
    if (node.left) _traversal(node.left);
    if (node.right) _traversal(node.right);
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else {
      node.value += '';
    }
  };
  _traversal(newTree.root);
  return newTree;
}


module.exports = FizzBuzzTree;
