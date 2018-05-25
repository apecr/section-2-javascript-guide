// Lecture: Objects

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2018 - this.yearOfBirth;
  },
  get age() {
    return this.calculateAge();
  }
};

console.log(john.age);
console.log(john.family[2]);

var age = john.calculateAge();
