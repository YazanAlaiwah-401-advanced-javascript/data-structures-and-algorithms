/* eslint-disable no-undef */
'use strict';

function multiBracketValidation(input) {
  let Brackets = { '(': 0, ')': 1, '[': 2, ']': 3, '{': 4, '}': 5 };
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let type = Brackets[input[i]];
    if (type % 2 === 0) {
      arr.push(type + 1);
    } else if (type % 2 === 1) {
      if(arr[arr.length - 1] !== type) return false;
      arr.pop();
    }
  }
  return arr.length === 0;
}

module.exports = multiBracketValidation;
