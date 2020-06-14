/* eslint-disable no-undef */
'use strict';
const Tree = require('../Data-Structures/tree/tree.js');
const fizzbuzz = require('../challenges/fizzBuzzTree/buzz-tree.js');
describe('FIZZBUZZ MODUEL',()=>{
  it('If the value is divisible by 3, replace the value with “Fizz”',()=>{
    let tree = new Tree();
    tree.add(3);
    let fizz = fizzbuzz(tree);
    expect(fizz.preOrder()[0]).toEqual('Fizz');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”',()=>{
    let tree = new Tree();
    tree.add(10);
    let fizz = fizzbuzz(tree);
    expect(fizz.preOrder()[0]).toEqual('Buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',()=>{
    let tree = new Tree();
    tree.add(15);
    let fizz = fizzbuzz(tree);
    expect(fizz.preOrder()[0]).toEqual('FizzBuzz');
  });

  it('If the value is not divisible by 3 or 5, simply turn the number into a String.',()=>{
    let tree = new Tree();
    tree.add(8);
    let fizz = fizzbuzz(tree);
    expect(fizz.preOrder()[0]).toEqual('8');
  });
});
