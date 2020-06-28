/* eslint-disable no-undef */
'use strict';
const InsertionSort = require('../challenges/InsertionSort/InsertionSort.js');
describe('InsertionSort MODUEL', () => {
  it('its should sort the array of number in Insertion Sort in Reverse-sorted array', () => {
    let sorted = InsertionSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('its should sort the array of number in Insertion Sort in Few uniques array', () => {
    let sorted = InsertionSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('its should sort the array of number in Insertion Sort in Nearly-sorted array', () => {
    let sorted = InsertionSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
