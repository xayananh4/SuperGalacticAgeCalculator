export class Age {

  constructor() {
    this.userDateOfBirth = new Date();
  }

  getUserAgeInYears(userDateOfBirth) {
    let today = new Date();
    let birthDate = this.userDateOfBirth;
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getSolarPlant() {
    return new Array("earth", "mercury", "venus", "mars", "jupiter");
  }

  convertAgeToDays(userDateOfBirth) {
    let numberOfDays = this.getUserAgeInYears(userDateOfBirth) * 365;
    return numberOfDays;
  }

  calculatorYearsSinceLastBirthday(userAge, pastBirthday) {
    let diff = Math.abs(userAge - pastBirthday);
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31);
    let years = Math.ceil(months / 12);
    return years;
  }

  calculatorAgeInSolarYears(planet, age) {
    let daysInYear;
    let numberOfDays;

    numberOfDays = this.convertAgeToDays(age);

    daysInYear = {
      "earth": 365,
      "mercury": 88.0,
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


}