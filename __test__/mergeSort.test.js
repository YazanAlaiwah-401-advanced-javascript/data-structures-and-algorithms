/* eslint-disable no-undef */
'use strict';
const mergeSort = require('../challenges/MergeSort/mergeSort.js');
describe('mergeSort MODUEL', () => {
  it('its should sort the array of number in Insertion Sort in Reverse-sorted array', () => {
    let sorted = mergeSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('its should sort the array of number in Insertion Sort in Few uniques array', () => {
    let sorted = mergeSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('its should sort the array of number in Insertion Sort in Nearly-sorted array', () => {
    let sorted = mergeSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
