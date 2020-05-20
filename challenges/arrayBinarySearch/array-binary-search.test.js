/* eslint-disable new-cap */
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

describe('Binary Search', () => {
  it('its ', () => {
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 66)).toEqual(5);
    let random = Math.floor(Math.random() * 120000);
    let key = Math.floor(Math.random() * random);
    expect(BinarySearch([...Array(random).keys()], key)).toEqual(key);
    random = Math.floor(Math.random() * 120000);
    key = Math.floor(Math.random() * random);
    expect(BinarySearch([...Array(random).keys()], key)).toEqual(key);
  });
});
