export class Age {

  constructor(dateOfBirth) {
    this.userDateOfBirth = dateOfBirth;
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

  convertAgeToDays(age) {
 
    }
}