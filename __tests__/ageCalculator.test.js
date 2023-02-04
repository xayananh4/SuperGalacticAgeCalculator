import{Age}  from './../src/age.js';

describe('Age', () => {

    test('should return the user date of birth', () => {
    const userAge = new Age('July 14,', '1984', '01:01:01');
    expect(userAge.MonthAndDate).toEqual('July 14,');
    expect(userAge.Year).toEqual('1984');
    expect(userAge.TimeOfBirth).toEqual('01:01:01');
  });

  test('should return age in years for the user', () => {

  });

});