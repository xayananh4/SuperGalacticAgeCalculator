export class Age {

  constructor(dateOfBirth) {
    this.userDateOfBirth = dateOfBirth;
    this.allThePlanets = ['earth', 'mercury', 'venus', 'mars', 'jupiter']

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
    console.log(numberOfDays);
    return numberOfDays;
  }

  getSolarPlant(planet) {

  }
}