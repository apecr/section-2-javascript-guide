// Lecture: Loops

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.reverse().forEach(element => console.log(element));

console.log(names.reverse());

// while loops
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// break and continue sentence

for (var i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
