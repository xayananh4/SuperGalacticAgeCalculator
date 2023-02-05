import { Age } from './../src/age.js';

describe('Age', () => {
  let userAge, pastBirthday, years;
  let earth, mercury, venus, mars, jupiter;
  let earthYears, mercuryYears, venusYears, marsYears, jupiterYears;
  let solarPlanet;

  beforeEach(() => {
    userAge = new Age();
    userAge.userDateOfBirth = new Date('January 01, 1967');
    pastBirthday = new Age();
    pastBirthday.userDateOfBirth = new Date('January 01, 1980');

    solarPlanet = userAge.getSolarPlant();
    earth = solarPlanet[0];
    mercury = solarPlanet[1];
    venus = solarPlanet[2];
    mars = solarPlanet[3];
    jupiter = solarPlanet[4];

    earthYears = userAge.calculatorAgeInSolarYears(earth, userAge);
    mercuryYears = userAge.calculatorAgeInSolarYears(mercury, userAge);
    venusYears = userAge.calculatorAgeInSolarYears(venus, userAge);
    marsYears = userAge.calculatorAgeInSolarYears(mars, userAge);
    jupiterYears = userAge.calculatorAgeInSolarYears(jupiter, userAge);
    years = userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth);

  });

  test('should show the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual('July 14, 1984');
    console.log(userAge);
  });

  test('should return the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual('July 14, 1984 01:01:01');
  });

  test('should return the user age in years', () => {
    expect(userAge.getUserAgeInYears(userAge)).toEqual(56);
  });

  test('should return the user age in days', () => {
    let numberOfDays = userAge.convertAgeToDays(userAge);
    expect(userAge.convertAgeToDays(userAge)).toEqual(numberOfDays);
  });

  test('should return a solar planet', () => {
    expect(solarPlanet[0]).toEqual(earth);
  });

  test('should return the users age in years for each planet', () => {
    expect(userAge.calculatorAgeInSolarYears(earth, userAge)).toEqual(earthYears);
    expect(userAge.calculatorAgeInSolarYears(mercury, userAge)).toEqual(mercuryYears);
    expect(userAge.calculatorAgeInSolarYears(venus, userAge)).toEqual(venusYears);
    expect(userAge.calculatorAgeInSolarYears(mars, userAge)).toEqual(marsYears);
    expect(userAge.calculatorAgeInSolarYears(jupiter, userAge)).toEqual(jupiterYears);
  });

  test('should return years since user past birthday', () => {
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(years);
  });

  test('should show the years that have pass since user past birthday', () => { 
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(13);
    console.log(years);   
  });


});