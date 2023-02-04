import { Age } from './../src/age.js';

describe('Age', () => {

  test('should return the user date of birth', () => {
    const userDob = new Age('July 14, 1984 01:01:01');
    expect(userDob.userDateOfBirth).toEqual('July 14, 1984 01:01:01');
  });

  test('should return the user age in years', () => {
    const userDob = new Age('July 02, 1985 01:01:01');
    expect(userDob.getUserAgeInYears(userDob)).toEqual(37);

  });

  test('should return the user age in days', () => {
    const userDob = new Age('July 02, 1985 01:01:01');
    expect(userDob.convertAgeToDays(userDob)).toEqual(1);

  });


});