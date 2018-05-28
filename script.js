// Coding challenge 2


const years = [1990, 1987, 1986, 1996, 2001, 1956, 1960];
const yearsFilled = years.map(element => element);

console.log(yearsFilled);

yearsFilled.forEach(yearOfBirht => {
  if (2018 - yearOfBirht >= 18) {
    return console.log('Full Age', yearOfBirht);
  }
  console.log('Not full age', yearOfBirht);
});

const printFullAge = yearsOfBirht => {
  const yearsOfBirthFilled = yearsOfBirht.map(element => element);
  yearsOfBirthFilled.forEach(yearOfBirht => {
    if (2018 - yearOfBirht >= 18) {
      return console.log('Full Age', yearOfBirht);
    }
    console.log('Not full age', yearOfBirht);
  });
  return yearsOfBirthFilled.map(element => 2018 - element >= 18);
};

console.log(printFullAge([1965, 2008, 1992]));