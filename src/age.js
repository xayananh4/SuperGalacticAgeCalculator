export class Age {
  constructor(dateOfBirth) {
    this.userDateOfBirth = dateOfBirth;
    this.allThePlanets = [];

  }

  calculatorAgeInSolarYears(planet, age) {
    let daysInYear;
    let numberOfDays;

    numberOfDays = this.convertAgeToDays(age);
    daysInYear = {
      "earth": 365,
      "mercury": 88,
      "venus": 224,
      "mars": 687,
      "jupiter": 4332
    };
    for (let element in daysInYear) {
      if (element === planet) {
        return numberOfDays / daysInYear[element];
      }
    }
  }

  getUserAgeInYears(userDateOfBirth) {
    let today = new Date();
    let birthDate = new Date(this.userDateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  convertAgeToDays(userDateOfBirth) {
    let numberOfDays = this.getUserAgeInYears(userDateOfBirth) * 365;
    return numberOfDays;
  }

  getSolarPlant() {
    return new Array("earth", "mercury", "venus", "mars", "jupiter");
  }





















}