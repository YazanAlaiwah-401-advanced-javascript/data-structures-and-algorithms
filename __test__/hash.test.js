/* eslint-disable no-undef */
'use strict';
const hash = require('../challenges/hashtable/hashtable.js');

describe('FIZZBUZZ MODUEL', () => {
  let hashtable = new hash(4000);
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashtable.add('name', 'yazan');
    expect(hashtable.contains('name')).toEqual(true);
  });
  it('Retrieving based on a key returns the value stored', () => {
    expect(hashtable.get('name')).toEqual('yazan');
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashtable.get('name2')).toEqual(null);
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashtable.add('nema', 'yazan2');
    expect(hashtable.contains('nema')).toEqual(true);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashtable.get('nema')).toEqual('yazan2');
  });
  it('Successfully hash a key to an in-range value', () => {
    expect(hashtable.hash('name') <= 4000).toEqual(true);
  });
});
