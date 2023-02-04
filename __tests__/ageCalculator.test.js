import{Age}  from './../src/age.js';

describe('Age', () => {

  test('should return a age for the user', () => {
    const userAge = new Age('December 17, 1995 03:24:00');
    expect(userAge).toEqual(38);
  });
});