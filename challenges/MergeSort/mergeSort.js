/* eslint-disable no-undef */
'use strict';

function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    Merge(left, right, arr);
  }
  return arr;
}
function Merge(left, right, arr) {
  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    for (; j < right.length; ) {
      arr[k++] = right[j++];
    }
  } else {
    for (; i < left.length; ) {
      arr[k++] = left[i++];
    }
  }

  return arr;
}

module.exports = mergeSort;
