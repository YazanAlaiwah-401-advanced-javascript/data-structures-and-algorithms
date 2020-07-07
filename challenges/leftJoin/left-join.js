/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
'use strict';
function leftJoin(h1, h2, type) {
  let arr = [];
  let hash1 = type === 'right' ? h2.storage : h1.storage;
  let hash2 = type === 'right' ? h1 : h2;
  for (let i = 0; i < hash1.length; i++) {
    let tempArr = [];
    if (hash1[i]) {
      let test = Object.create(hash1[i].head.value);
      while (test) {
        for (let key in hash1[i].head.value) {
          let scondeHash = hash2.contains(key) ? hash2.get(key) : 'NULL';
          tempArr.push(key, test[key], scondeHash);
          arr.push(tempArr);
        }
        test = test.next;
      }
    }
  }
  return arr;
}

module.exports = leftJoin;
