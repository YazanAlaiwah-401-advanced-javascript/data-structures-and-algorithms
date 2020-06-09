/* eslint-disable no-undef */
'use strict';
const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');

describe('MULTI BRACKET VALIDATION MODULE',()=>{
  it('its should return true for the match cases',()=>{
    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]	')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
  });
  it('its should return false for not match cases',()=>{
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](')).toEqual(false);
    expect(multiBracketValidation('{(})')).toEqual(false);
  });
});





