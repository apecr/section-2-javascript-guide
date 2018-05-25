// Lecture: variables

// var name = 'John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// Lecture: variables 2
/*
var name = 'John';
var age = 26;

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age +
' years old ' + job + '. Is he married? ' + isMarried +
'.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age +
' years old ' + job + '. Is he married? ' + isMarried +
'.');

var lastName = prompt('What is the last name');
console.log(lastName);

alert(name + ' is a ' + age +
' years old ' + job + '. Is he married? ' + isMarried +
'.');
*/

//Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
console.log(ageJohn, ageMark);
*/

//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
  console.log(`${name} is married!`);
} else {
  console.log(`${name} will hopefully marry soon :)`);
}

isMarried = false;

if (isMarried) {
  console.log('YES');
} else {
  console.log('NO');
}

if (23 == '23') {
  console.log('Something to print...');
}

// Better use this
if (23 === '23') {
  console.log('Something to print...');
}
*/

// Lecture: boolean logic and switch

/*
var age = 25;

if (age < 20) {
  console.log('John is a teenager.');
} else {
  console.log('John is a man.');
}

var job = prompt('What John does?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John hels fight crime.');
    break;
  default:
    console.log('John does something else.');
}
*/

// CODING CHALLENGE 1

// The player with the highest value of this height (in cm)
// plus five times his age wins

// 1. Create
// 2. Assign scores
// 3. Decide who wins and print the winner. Include the score
// Dont forget that can be a draw
// 4. Add a third player and now decide who wins

var john = {
  name: 'John',
  height: 180,
  age: 10
};

var johnFriend = {
  name: 'JohnFriend',
  height: 180,
  age: 20
};

var anotherFriend = {
  name: 'JohnAnotherFriend',
  height: 180,
  age: 20
};


const arrayPersons = [john, johnFriend, anotherFriend];
var calculateScore = person => person.height + 5 * person.age;

const reducePersons = (personwhoWins, newPerson) => {
  if (calculateScore(personwhoWins) > calculateScore(newPerson)) {
    personwhoWins.draw = false;
    return personwhoWins;
  }
  if (calculateScore(personwhoWins) === calculateScore(newPerson)) {
    personwhoWins.draw = true;
    return personwhoWins;
  }
  return newPerson;
};

const result = arrayPersons.reduce(reducePersons, {});

console.log(result.draw ? 'It\'s a draw' : `${result.name} has won with ${calculateScore(result)}`);

