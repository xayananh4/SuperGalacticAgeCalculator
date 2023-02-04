import Age from './../src/age.js';

describe('Age', () => {

  test('should return a user age', () => {
    const userAge = new Age(7,14,1984);
    expect(returnUserAge()).toEqual(userAge);

  });
});