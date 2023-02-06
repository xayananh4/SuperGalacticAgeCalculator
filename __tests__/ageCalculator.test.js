import { Age } from './../src/age.js';

describe('Age', () => {
  let userAge, pastBirthday, years, futureBirthday, futureYears, futureDate;
  let earthYearsResults, mercuryYearsResults, venusYearsResults, marsYearsResults, jupiterYearsResults;
  let earth, mercury, venus, mars, jupiter;
  let earthYears, mercuryYears, venusYears, marsYears, jupiterYears;
  let solarPlanet;

  beforeEach(() => {
    userAge = new Age();
    userAge.userDateOfBirth = new Date('January 01, 1967');
    
    pastBirthday = new Age();
    pastBirthday.userDateOfBirth = new Date('January 01, 1980');
    
    futureBirthday = new Age();
    futureDate = new Date(futureBirthday.userDateOfBirth.setFullYear(2028,1,1));

    // var currentDate = new Date();
    // var futureDate = new Date(currentDate.setFullYear(2028,1,01));

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
    earthYearsResults = userAge.calculatorAgeInSolarYears(earth, years);
    
    mercuryYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mercury, years)).toFixed(2);
    venusYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(venus, years)).toFixed(2);
    marsYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mars, years)).toFixed(2);
    jupiterYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(jupiter, years)).toFixed(2);
  });

  test('should show the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual(userAge.userDateOfBirth);
    console.log(userAge.userDateOfBirth);
  });

  test('should return the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual(userAge.userDateOfBirth);
  });

  test('should return the user age in years', () => {
    expect(userAge.getUserAgeInYears(userAge.userDateOfBirth)).toEqual(56);
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

  test('should show users age in years for each planet', () => {
    expect(userAge.calculatorAgeInSolarYears(earth, userAge)).toEqual(earthYears);
    expect(userAge.calculatorAgeInSolarYears(mercury, userAge)).toEqual(mercuryYears);
    expect(userAge.calculatorAgeInSolarYears(venus, userAge)).toEqual(venusYears);
    expect(userAge.calculatorAgeInSolarYears(mars, userAge)).toEqual(marsYears);
    expect(userAge.calculatorAgeInSolarYears(jupiter, userAge)).toEqual(jupiterYears);
    console.log(earthYears + " in " + earth + " years ");
    console.log(mercuryYears + " in " + mercury + " years ");
    console.log(venusYears + " in " + venus + " years ");
    console.log(marsYears + " in " + mars + " years ");
    console.log(jupiterYears + " in " + jupiter + " years ");
  });

  test('should return years since user past birthday', () => {
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(years);
  });

  test('should show the years that have pass since user past birthday', () => {
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(13);
    console.log(years);
  });

  test('should show the years that have pass since last birthday on all planets', () => {
    expect(earthYearsResults).toEqual(earthYearsResults);
    expect(mercuryYearsResults).toEqual(mercuryYearsResults);
    console.log(earthYearsResults + " " + earth + " years have passed.");
    console.log(mercuryYearsResults + " " + mercury + " years have passed.");
    console.log(venusYearsResults + " " + venus + " years have passed.");
    console.log(marsYearsResults + " " + mars + " years have passed.");
    console.log(jupiterYearsResults + " " + jupiter + " years have passed.");
  });

  test('should show the years until user future birthday', () => {
    expect(futureYears = userAge.calculatorYearUntilFutureBirthday(futureDate,userAge.userDateOfBirth)).toEqual(5);
    console.log(futureYears  + " " + earth + " years have yet to pass.");
  });
});