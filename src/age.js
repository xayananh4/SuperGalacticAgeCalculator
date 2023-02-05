export class Age {

  constructor() {
    this.userDateOfBirth = new Date();
  }

  calculatorAgeInSolarYears(planet, age) {
    let daysInYear;
    let numberOfDays;
    let total;

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

        total = numberOfDays / daysInYear[element];
        total;
        
      }
    }
    console.log(total);
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

  convertAgeToDays(userDateOfBirth) {
    let numberOfDays = this.getUserAgeInYears(userDateOfBirth) * 365;
    return numberOfDays;
  }

  getSolarPlant() {
    return new Array("earth", "mercury", "venus", "mars", "jupiter");
  }

  calculatorYearsSinceLastBirthday(userAge, pastBirthday) {
    let diff = Math.abs(userAge - pastBirthday);
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31);
    let years = Math.ceil(months / 12);
    return years;
  }
}