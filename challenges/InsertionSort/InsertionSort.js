'use strict';
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(InsertionSort([20, 18, 12, 8, 5, -2]));
console.log(InsertionSort([5, 12, 7, 5, 5, 7]));
console.log(InsertionSort([2, 3, 5, 7, 13, 11]));
module.exports = InsertionSort;
