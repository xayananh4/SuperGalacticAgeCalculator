import { Age } from './../src/age.js';

describe('Age', () => {
  let userAge;

  beforeEach(() => {
    userAge = new Age('July 14, 1984 01:01:01');
  });

  test('should show the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual('July 14, 1984 01:01:01');
    console.log(userAge);
  });


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
    let numberOfDays = userDob.convertAgeToDays(userDob);
    expect(userDob.convertAgeToDays(userDob)).toEqual(numberOfDays);
  });

  test('should return a solar planet', () => {
    const userAge = new Age('July 02, 1985 01:01:01');
    let solarPlanet = userAge.getSolarPlant('mercury');
    expect(userAge.getSolarPlant(solarPlanet)).toEqual('mercury');
  });

});