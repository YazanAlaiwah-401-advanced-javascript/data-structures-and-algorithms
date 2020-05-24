/* eslint-disable no-undef */
'use strict';
let binarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('BINARYSEARCH MODULE', () => {
  it('its should return the index of the key if the key in the array and -1 otherwise', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
  it('its should work with array of 1000 length and random number',()=>{
    let value = Math.round(Math.random()*1000);
    expect(binarySearch(Array.from(Array(1000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*1000);
    expect(binarySearch(Array.from(Array(1000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*1000);
    expect(binarySearch(Array.from(Array(1000).keys()),value)).toEqual(value);
  });
  it('its should work with array of 100000 length and random number',()=>{
    let value = Math.round(Math.random()*100000);
    expect(binarySearch(Array.from(Array(100000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*100000);
    expect(binarySearch(Array.from(Array(100000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*100000);
    expect(binarySearch(Array.from(Array(100000).keys()),value)).toEqual(value);
  });
  it('its should work with array of 1000000 length and random number',()=>{
    let value = Math.round(Math.random()*1000000);
    expect(binarySearch(Array.from(Array(1000000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*1000000);
    expect(binarySearch(Array.from(Array(1000000).keys()),value)).toEqual(value);
    value = Math.round(Math.random()*1000000);
    expect(binarySearch(Array.from(Array(1000000).keys()),value)).toEqual(value);
  });

});


