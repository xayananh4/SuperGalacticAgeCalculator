import{Age}  from './../src/age.js';

describe('Age', () => {

    test('should return the user date of birth', () => {
    const userAge = new Age('July 14, 1984 01:01:01');
    expect(userAge.userDateOfBirth).toEqual('July 14, 1984 01:01:01');
  });

  test('should return age in years for the user', () => {

  });

});