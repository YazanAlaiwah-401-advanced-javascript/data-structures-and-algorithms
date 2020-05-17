function reverseArray(arr) {
  let reversedArray = [];
  for (let index = 0; index < arr.length; index++) {
    reversedArray.unshift(arr[index]);
  }
  return reversedArray;
}

//// for strectch goal its say to use a second way so i will use Recursion as my stretch goal

function reverseArrayWithRecursion(arr, i=0) {
  if (i === arr.length) {
    return [];
  }
  return [...reverseArrayWithRecursion(arr, i + 1), arr[i]];
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayWithRecursion([1, 2, 3, 4, 5, 6]));
console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));
console.log(
  reverseArrayWithRecursion([89, 2354, 3546, 23, 10, -923, 823, -12])
);
