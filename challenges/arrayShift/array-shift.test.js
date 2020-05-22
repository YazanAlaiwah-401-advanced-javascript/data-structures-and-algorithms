/* eslint-disable no-undef */
function insertShiftArray(arr, value) {
  /// using splice
  //   len % 2 === 0
  //     ? arr.splice(len / 2, 0, value)
  //     : arr.splice(len / 2 + 0.5, 0, value);

  /// without biult in functions
  let len = arr.length;
  len = len % 2 ? len / 2 + 0.5 : len / 2;

  let oldV;
  for (; len < arr.length; len++) {
    oldV = arr[len];
    arr[len] = value;
    value = oldV;
  }
  arr.push(value);

  return arr;
}

/// stretch goal

function removeMiddelIndex(arr) {
  let len = arr.length;
  len = len % 2 ? len / 2 - 0.5 : len / 2;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === len) continue;
    newArr.push(arr[i]);
  }
  return newArr;
}

//  Requirements unit test
describe('Array Shift', () => {
  it('its should add the giving value to middile of the array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });
  it('its should remove the middle element for array and shift the values to close the gap', () => {
    expect(removeMiddelIndex([2, 4, 6, 8])).toEqual([2, 4, 8]);
    expect(removeMiddelIndex([4, 8, 15, 23, 42])).toEqual([4, 8, 23, 42]);
  });
});
