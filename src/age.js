export class Age {
  constructor() {
    this.userDateOfBirth = new Date();
  }

  getUserAgeInYears(userDateOfBirth) {
    let today = new Date();
    let birthDate = this.userDateOfBirth;
    let userAge = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      userAge--;
    }
    return userAge;
  }

  getSolarPlant() {
    return new Array("earth", "mercury", "venus", "mars", "jupiter");
  }

  convertAgeToDays(userDateOfBirth) {
    let numberOfDays = this.getUserAgeInYears(userDateOfBirth) * 365;
    return numberOfDays;
  }
  calculatorYearsSinceLastBirthday(planet, pastBirthday) {
    let result;
    const userAge = Date.now();
    let diff = Math.abs(userAge - pastBirthday);
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31);
    let years = Math.ceil(months / 12);
    console.log(years);

    let allThePlanets = {
      "earth": 1,
      "mercury": 0.241,
      "venus": 0.62,
      "mars": 1.88,
      "jupiter": 11.86
    };

    for (let element in allThePlanets) {
      if (element === planet) {
        result = years / allThePlanets[element];

        return result;
      }
    }
  }

  calculatorYearUntilFutureBirthday(futureDate, userDob) {
    let userCurrentAge = this.getUserAgeInYears(userDob);
    let futureBirthdayAge = futureDate.getFullYear() - userDob.getFullYear();
    return futureBirthdayAge - userCurrentAge;
  }

  calculatorAgeInSolarYears(planet, userAge) {
    let result;
    //convert the userbirthday into age number
    let _userAge = this.getUserAgeInYears(userAge);
    let allThePlanets = {
      "earth": 1,
      "mercury": 0.241,
      "venus": 0.62,
      "mars": 1.88,
      "jupiter": 11.86
    };

    for (let element in allThePlanets) {
      if (element === planet) {
        result = _userAge / allThePlanets[element];
        return result;
      }

    }
  }
}