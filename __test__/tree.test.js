/* eslint-disable no-undef */
'use strict';
let Tree = require('../Data-Structures/tree/tree.js');

describe('Stack Moduel', () => {
  let tree2 = new Tree();
  let tree1 = new Tree();
  tree1.add(10);
  tree1.add(8);
  tree1.add(11);
  tree1.add(7);
  tree1.add(9);
  tree1.add(6);
  tree1.add(12);
  tree1.add(13);
  it('Can successfully search on breadthFirstTraversal', () => {
    // tree2.breadthFirstTraversal(tree1)
    expect(tree2.breadthFirstTraversal(tree1)).toEqual([
      10,
      8,
      11,
      7,
      9,
      12,
      6,
      13,
    ]);
  });
  it('it should return the tree is empty if there is no nodes', () => {
    expect(tree1.breadthFirstTraversal(tree2)).toEqual('the tree is empty');
  });
});
