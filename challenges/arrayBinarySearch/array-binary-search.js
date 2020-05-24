/* eslint-disable no-undef */
function BinarySearch(arr, key) {
  let L = 0;
  let R = arr.length - 1;
  let M;
  while (L <= R) {
    M = Math.floor((L + R) / 2);
    if (arr[M] < key) {
      L = M + 1;
      continue;
    } else if (arr[M] > key) {
      R = M - 1;
      continue;
    } else if (arr[M] === key) {
      return M;
    }
  }
  return -1;
}

module.exports = BinarySearch;
