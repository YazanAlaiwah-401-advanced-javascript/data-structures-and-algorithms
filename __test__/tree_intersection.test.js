/* eslint-disable no-undef */
'use strict';
let BinaryTree = require('../challenges/BinarySearchTree/tree.js');
let tree_intersection = require('../challenges/treeIntersection/tree-intersection.js');
describe('tree_intersection.test Moduel', () => {
  let tree1 = new BinaryTree();
  let tree2 = new BinaryTree();
  tree1.add(100);
  tree1.add(150);
  tree1.add(250);
  tree1.add(160);
  tree1.add(125);
  tree1.add(75);
  tree1.add(200);
  tree1.add(350);
  tree1.add(175);
  tree1.add(300);
  tree1.add(500);

  tree2.add(100);
  tree2.add(42);
  tree2.add(125);
  tree2.add(15);
  tree2.add(160);
  tree2.add(600);
  tree2.add(200);
  tree2.add(350);
  tree2.add(175);
  tree2.add(500);
  tree2.add(4);
  it(' return a set of values found in both trees.', () => {
    // tree2.breadthFirstTraversal(tree1)
    expect(tree_intersection(tree1, tree2)).toEqual([100, 160, 500]);
  });
});
