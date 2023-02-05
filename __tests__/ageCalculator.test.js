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
    expect(userAge.userDateOfBirth).toEqual('July 14, 1984 01:01:01');
  });

  test('should return the user age in years', () => {
    expect(userAge.getUserAgeInYears(userAge)).toEqual(38);
  });


  test('should return the user age in days', () => {
    let numberOfDays = userAge.convertAgeToDays(userAge);
    expect(userAge.convertAgeToDays(userAge)).toEqual(numberOfDays);
  });

  test('should return a solar planet', () => {
    let solarPlanet = userAge.getSolarPlant();
    expect(solarPlanet[0]).toEqual("earth");
  });








});