import{Age}  from './../src/age.js';

describe('Age', () => {

  test('should return a age for the user', () => {
    const userAge = new Age(7,14,1984);
    expect(userAge).toEqual(38);

  });
});