import{Age}  from './../src/age.js';

describe('Age', () => {

    test('should return the user date of birth', () => {
    const userAge = new Age('July 14, 1984 03:24:00');
    expect(userAge).toEqual('July 14, 1984 03:24:00');
  });

  test('should return age for the user', () => {
    const userAge = new Age('July 14, 1984 03:24:00');
    expect(userAge.getUsersAgeInYears()).toEqual(38);
  });

});