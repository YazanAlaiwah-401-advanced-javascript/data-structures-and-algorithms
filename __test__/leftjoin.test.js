/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
const Hashmap = require('../challenges/hashtable/hashtable.js');
const leftjoin = require('../challenges/leftJoin/left-join.js');
const hashmap = new Hashmap(20); // ==> [4000]
hashmap.add('found', 'enamored');
hashmap.add('wrath', 'anger');
hashmap.add('diligent', 'employed');
hashmap.add('outfit', 'garb');
hashmap.add('guide', 'usher');
const hashmap2 = new Hashmap(20); // ==> [4000]
hashmap2.add('found', 'averse');
hashmap2.add('wrath', 'delight');
hashmap2.add('diligent', 'idle');
hashmap2.add('guide', 'follow');
hashmap2.add('follow', 'jam');

describe('LEFT JOIN MODULE', () => {
  it('it should make like left join', () => {
    let resulte = [
      ['found', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', 'NULL'],
      ['guide', 'usher', 'follow'],
    ];
    expect(leftjoin(hashmap, hashmap2)).toEqual(resulte);
  });

  it('it should make like right join', () => {
    let resulte = [
      ['found', 'averse', 'enamored'],
      ['follow', 'jam', 'NULL'],
      ['wrath', 'delight', 'anger'],
      ['diligent', 'idle', 'employed'],
      ['guide', 'follow', 'usher'],
    ];
    expect(leftjoin(hashmap, hashmap2, 'right')).toEqual(resulte);
  });
});
