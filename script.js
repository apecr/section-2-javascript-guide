// Coding challenge 2: Solution

var years = [2001, 1985, 1994, 2014, 1973];
var ages = [];

for (var i = 0; i < years.length; i++) {
  ages[i] = 2016 - years[i];
}

for (i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log('Full age', ages[i]);
  } else {
    console.log('Not full age', ages[i]);
  }
}

function printFullAge(yearsF) {
  var agesF = [];
  var fullAges = [];

  for (var i = 0; i < yearsF.length; i++) {
    agesF[i] = 2016 - yearsF[i];
  }

  for (i = 0; i < agesF.length; i++) {
    if (agesF[i] >= 18) {
      console.log('Full age', agesF[i]);
      fullAges.push(true);
    } else {
      console.log('Not full age', agesF[i]);
      fullAges.push(false);
    }
  }
  return fullAges;
}

console.log(printFullAge([1990, 2001, 2003]));