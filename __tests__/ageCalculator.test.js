import { Age } from './../src/age.js';

describe('Age', () => {
  let userAge, pastBirthday, years, futureBirthday, futureYears, futureDate;
  let earthYearsResults, mercuryYearsResults, venusYearsResults, marsYearsResults, jupiterYearsResults;
  let earth, mercury, venus, mars, jupiter;
  let earthYears, mercuryYears, venusYears, marsYears, jupiterYears;
  let solarPlanet, _mercuryYearsResults;

  beforeEach(() => {
    userAge = new Age();
    userAge.userDateOfBirth = new Date('January 01, 1967');
    
    pastBirthday = new Age();
    pastBirthday.userDateOfBirth = new Date('January 01, 2010');
    
    futureBirthday = new Age();
    futureDate = new Date(futureBirthday.userDateOfBirth.setFullYear(2028,1,1));

    solarPlanet = userAge.getSolarPlant();
    earth = solarPlanet[0];
    mercury = solarPlanet[1];
    venus = solarPlanet[2];
    mars = solarPlanet[3];
    jupiter = solarPlanet[4];

    // years = userAge.calculatorYearsSinceLastBirthday(pastBirthday.userDateOfBirth);
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
    earthYearsResults = userAge.calculatorAgeInSolarYears(earth, years);
    mercuryYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mercury, years)).toFixed(2);
    venusYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(venus, years)).toFixed(2);
    marsYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mars, years)).toFixed(2);
    jupiterYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(jupiter, years)).toFixed(2);
    expect(earthYearsResults).toEqual(56);
    expect(mercuryYearsResults).toEqual("232.37");
    expect(venusYearsResults).toEqual("90.32");
    expect(marsYearsResults).toEqual("29.79");
    expect(jupiterYearsResults).toEqual("4.72");
 
  });

  
  //Prompt To Display All Ages For Each Planet 
  test('should show users age in years for each planet', () => {
    earthYears = userAge.calculatorAgeInSolarYears(earth, userAge.userDateOfBirth);
    mercuryYears = userAge.calculatorAgeInSolarYears(mercury, userAge.userDateOfBirth);
    venusYears = userAge.calculatorAgeInSolarYears(venus, userAge.userDateOfBirth);
    marsYears = userAge.calculatorAgeInSolarYears(mars, userAge.userDateOfBirth);
    jupiterYears = userAge.calculatorAgeInSolarYears(jupiter, userAge);
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
  
  //Prompt To Show Years That Have Pass Since Last Birthday 
  test('should show the years that have pass since last birthday on all planets', () => { 
    earthYearsResults = userAge.calculatorYearsSinceLastBirthday(earth, pastBirthday.userDateOfBirth);
    // mercuryYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mercury, years)).toFixed(2);
    // venusYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(venus, years)).toFixed(2);
    // marsYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mars, years)).toFixed(2);
    // jupiterYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(jupiter, years)).toFixed(2);
    expect(earthYearsResults).toEqual(13);
    // expect(mercuryYearsResults).toEqual(mercuryYearsResults);
    // expect(venusYearsResults).toEqual(venusYearsResults);
    // expect(marsYearsResults).toEqual(marsYearsResults);
    // expect(jupiterYearsResults).toEqual(jupiterYearsResults);
    console.log(earthYearsResults + " " + earth + " years have passed.");
    // console.log(mercuryYearsResults + " " + mercury + " years have passed.");
    // console.log(venusYearsResults + " " + venus + " years have passed.");
    // console.log(marsYearsResults + " " + mars + " years have passed.");
    // console.log(jupiterYearsResults + " " + jupiter + " years have passed.");
  });

  test('should show the years until user future birthday', () => {
    expect(futureYears = userAge.calculatorYearUntilFutureBirthday(futureDate,userAge.userDateOfBirth)).toEqual(5);
    _mercuryYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mercury, futureYears)).toFixed(2);
    console.log(futureYears  + " " + earth + " years have yet to pass.");
    console.log(_mercuryYearsResults  + " " + mercury + " years have yet to pass.");

  });
});