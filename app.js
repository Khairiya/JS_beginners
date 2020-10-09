// var num = 0;
// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

for (let num = 0; num < 100; num++) {
  console.log(num);
}

let fruits = new Array(
  "orange",
  "mango",
  "watermelon",
  "apple",
  "tangerine",
  "yooyi"
);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numbers = [
  1,
  2,
  23,
  45,
  456,
  32,
  34,
  35,
  45,
  67,
  7,
  8,
  9,
  90,
  900,
  679,
  45,
];

console.log(
  numbers.sort(function (a, b) {
    return a - b; //sorted in ascending order
  })
);

console.log(
  numbers.sort(function (a, b) {
    return b - a; //sorted in descending order
  })
);

let emptyArray = [];
for (let num1 = 0; num1 < 10; num1++) {
  emptyArray.push(num1);
}

console.log(emptyArray);

let person = {
  first: "Rasha",
  last: "Gibrill",
  age: 23,
  personInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age;
  }
};
console.log(person["first"]);
person.age++;
console.log(person.personInfo());

var age = prompt('What is your age?')

if ((age >= 18) && (age <= 35)) {
    status = 'Demo audience'
    
} else {
    status = 'Not my audience'
}

console.log(status);