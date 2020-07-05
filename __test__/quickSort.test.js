/* eslint-disable no-undef */
'use strict';
const quickSort = require('../challenges/QuickSort/quickSort.js');
describe('quickSort MODUEL', () => {
  it('its should sort the array of number in Insertion Sort in Reverse-sorted array', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let sorted = quickSort(arr, 0, arr.length - 1);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('its should sort the array of number in Insertion Sort in Few uniques array', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let sorted = quickSort(arr, 0, arr.length - 1);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('its should sort the array of number in Insertion Sort in Nearly-sorted array', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    let sorted = quickSort(arr, 0, arr.length - 1);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
