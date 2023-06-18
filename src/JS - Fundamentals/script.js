'use strict';

// let js = 'amazing'
// console.log(111)

// console.log(null)

// console.log('Lorem Lorem \n\
// Loren \n\
// Lorem')
// console.log(`Lorem Lorem
// Loren
// Lorem`)

// let age = prompt('Enter your age...')

// console.log('Age: ', age)
// console.log(first = true)

const arr = ['Test', 'that', 'array'];
console.log(arr.indexOf('3'));
// -------------
const obj = {
  firstName: 'Jonas',
  birthDay: 10,
  friends: ['Michael', 'Peter', 'Steven'],
  driverLicens: true,
  calcAge: function () {
    console.log(this);
    this.age = 20 - this.birthDay;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old teacher, and he ${
      this.driverLicens ? 'has driver license' : "doesn't have driver license"
    }`;
  },
  orderPizza: function (firstOrder, ...secondOrder) {
    console.log(':', firstOrder, secondOrder);
  },
};
// console.log(obj.getSummary())
// console.log(obj.calcAge())
// console.log(obj.age)

// -------------

const objMark = {
  firstName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const objJohn = {
  firstName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
objMark.calcBMI();
objJohn.calcBMI();

// console.log(objJohn.bmi > objMark.bmi ? `${objJohn.firstName}'s BMI (${objJohn.bmi}) is higher than ${objMark.firstName} (${objMark.bmi})`
//  : `${objMark.firstName}'s BMI (${objMark.bmi}) is higher than ${objJohn.firstName} (${objJohn.bmi})!`)

// ------------
const types = [];
for (let i = 0; i < arr.length; i++) {
  // console.log('Element from Array: ', arr[i], typeof arr[i])

  // Filling array
  // types[i] = typeof arr[i]
  types.push(typeof arr[i]);
}

// console.log(types)

const years = [1991, 2007, '1969', 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  if (typeof years[i] !== 'number') continue;
  ages.push(2037 - years[i]);
}
// console.log('Only numbers in the array: ', ages)

// ------------- Backwards array

for (let i = years.length - 1; i >= 0; i--) {
  console.log('Backwards array: ', years[i]);
}

// -------
const temps = [100, -1, 10, 'eee', 12, 20, 30];
const tempsTwo = [1000, -1, 10, 'ewwwee', 120, 200, 300];

const calcMinMaxTemp = (temps, tempsTwo) => {
  const tempsThree = [...temps, ...tempsTwo];
  console.log(':', tempsThree);

  let max = tempsThree[0];
  let min = tempsThree[0];
  for (let i = 0; i < tempsThree.length; i++) {
    if (typeof tempsThree[i] !== 'number') continue;
    if (tempsThree[i] > max) max = tempsThree[i];
    if (tempsThree[i] < min) min = tempsThree[i];
  }
  console.log(':', max, min);
  return max - min;
};
const amplitude = calcMinMaxTemp(temps, tempsTwo);
console.log(':', amplitude);

const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(':', sum);
};
add(5, 6, 7);
add(5, 6, 8, 9, 10);
const nums = [3, 2, 1];
add(...nums);

obj.orderPizza('patato', 'beaf', 'grape');

// Nullish operator ?? for null end undefined. Not work with '' or 0
const test = undefined;
console.log(':', test ?? 'is null');

/////////////////////////////////////////////////////////////////
const restaurants = {
  nameRes: 'GrillStake',
  categories: ['One', 'Two'],
  openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
  starterMenu: ['Focaccia', 'Brusc', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: (arg0, arg1, arg2) => {
    console.log('Delicious Pasta:', arg0, arg1, arg2);
  },
  orderPizza: (arg1, arg2) => {
    console.log(':', arg1, arg2);
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(':', restaurants.order(0, 1));
console.log(':', [...restaurants.order(0, 1), 'add new element']);

const {
  nameRes: resName,
  openHours,
  categories = [],
  testProperty: testOne = ['Test one with alice and default value'],
} = restaurants;

const {
  fri: { open, close },
} = openHours;
console.log(':', resName, openHours.thu.close, categories, testOne);
console.log('Destructure Nested Object:', open, close);

let a = 111;
let b = 999;
const objAB = { a: 23, b: 14 };
({ a, b } = objAB);
console.log(':', a, b);

// const ingredients = [
// 	prompt("Lets's make pasta!"),
// 	prompt("Lets's make pasta 2!"),
// ];
const ingredients = ['test', 'ing1', 'ing2'];
restaurants.orderPasta(...ingredients);

// Objects
const newRestaurant = { found: 1998, ...restaurants, founder: 'Gucci' };
console.log(':', newRestaurant);

const testSpreadOperator = (...nums) => {
  // console.log(":", nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  console.log(':', sum);
};
testSpreadOperator(1, 2, 3, 10, 20);

const x = [23, 5, 7];
testSpreadOperator(...x);

// || Operators 0 is false
console.log(':', 3 || 'John');
console.log(':', '' || 'John');
console.log(':', true || 'John');
console.log(':', null || 'John');
console.log(':', null || 0 || '' || 'John' || 23 || null);

restaurants.numGuests = 0;
const guests = restaurants.numGuests ? restaurants.numGuests : 10;
console.log(':', guests);

const guests2 = restaurants.numGuests || 10;
console.log(':', guests2);

// && Operators 0 is false
console.log(':', 0 && 'John');
console.log(':', 7 && 'John');

if (restaurants.orderPizza) {
  restaurants.orderPizza('Mash', 'Span');
}

restaurants.orderPizza && restaurants.orderPizza('mash', 'span');

// ?? Nullish Operator = 0 is true for ??
restaurants.numGuestsNullish = 0;
const guestsNullish = restaurants.numGuestsNullish ?? 10;
console.log(':', guestsNullish);

// Ternary
const guestsNullishTer = restaurants.numGuestsNullish ? 10 : null;
console.log(':', guestsNullishTer);

// OR assignment operator
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Rossi',
  owner: 'Ferro',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator for ( null or undefined )
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(':', rest1);
console.log(':', rest2);

const users = [{ name: 'Jones', email: 'hi@hi.hi' }];

console.log(
  'Array optional chaining:',
  users[0]?.name ?? 'Empty array element'
);

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta']);

// console.log(":", ordersSet);
// console.log(":", new Set("Koko"));?
// console.log(":", ordersSet.size);
// console.log(":", ordersSet.has("Pasta"));
// ordersSet.add("Banana");
// console.log(":", ordersSet);
// ordersSet.delete("Banana");
console.log(':', ordersSet);
// ordersSet.clear("Banana");

for (const setEl of ordersSet) console.log(':', setEl);

const stuff = ['Test', 'Chest', 'Rest', 'Guest', 'Guest'];
const uniqueWords = [...new Set(stuff)];
console.log(':', uniqueWords);

const rest = new Map();
rest.set('name', 'Classic Italian');
rest.set(1, 'Italy');
rest.set(2, 'Portugal');
console.log(':', rest.set(2, 'Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Veg', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
// console.log(":", rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(":", rest.has("categories"));
// console.log(":", rest.delete("categories"));
// console.log(":", rest.has("categories"));
// console.log(":", rest.size);

const arrTest = [1, 2];
rest.set(arrTest, 'Test');
console.log(':', rest.get(arrTest));

rest.set(document.querySelector('h1'), 'Heading');
console.log(':', rest);

// High order/Callback functions

const oneWord = (str) => str.replace(/ /g, '').toLowerCase();

const transform = (str, fn) => {
  console.log('Result: ', fn(str));
  console.log('Function name:', fn.name);
};

transform('Test String', oneWord);

// Return function
const greet = (greeting) => {
  return (name) => {
    console.log(':', greeting, name);
  };
};
// const greet = (greeting) => (name) => {
//   console.log(':', greeting, name);
// };

const resultReturnedFunction = greet('Hey');
resultReturnedFunction('John');

greet('Hello')('John');

// Partial app
const addTax = (rate, value) => value + value * rate;
console.log(':', addTax(0.2, 200));

const addVat = addTax.bind(null, 0.23);
console.log(':', addVat(200));

// with return function
const addTaxNew = (value) => (rate) => value + value * rate;

const resAddTax = addTaxNew(200);
console.log(':', resAddTax(0.25));

// Only one time run function IIFE
(() => console.log('Run once:'))();

const arrReducer = [10, 20, 30];

const resultReducer = arrReducer.reduce((acc, cur) => acc + cur, 0);
console.log(':', resultReducer);

const max = arrReducer.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else {
    console.log(':', mov);
    return mov;
  }
}, arrReducer[0]);
console.log('Max:', max);

// Sorting for numbers, for strings can use sort((a, b))
const move = [1, 5, 20, -19, 20, -3];
const moveStr = ['b', 'f', 'c', 'd', 'a'];

const resMoveStr = moveStr.sort(); // for Strings
const resMove = move.sort(
  (a, b) => b - a
  // {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  // }
);

console.log(':', resMove);
console.log(':', resMoveStr);

// Max Min number
const arrMax = [1, 3, 6];
console.log(':', Math.max(...arrMax));
console.log(':', Math.min(...arrMax));

const testStr = '8';
const resStr = testStr.padStart(2, 0);
console.log(':', resStr);

// Dates Internationalization
const optionsFormatDate = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // 2-digit
  year: 'numeric', // 2-digit
  weekday: 'long',
};
const nowDate = new Date();
const strDate = new Intl.DateTimeFormat('bg-BG', optionsFormatDate).format(
  nowDate
);
console.log(':', strDate);

const localeBrowserLang = navigator.language;
console.log(':', localeBrowserLang);
// console.log(':', navigator);

// Numbers Internationalization
const num = 2342332.21;

const optionsNumberFormat = {
  // style: 'unit',
  // style: 'percent',
  style: 'currency',
  currency: 'EUR',
  unit: 'kilometer-per-hour', // mile-per-hour
  unit: 'celsius',
};
console.log(
  'US:    ',
  new Intl.NumberFormat('en-US', optionsNumberFormat).format(num)
);
console.log(
  'Germany:    ',
  new Intl.NumberFormat('de-DE', optionsNumberFormat).format(num)
);
console.log(
  'Syria:    ',
  new Intl.NumberFormat('ar-SY', optionsNumberFormat).format(num)
);
console.log(
  'Local Browser:    ',
  new Intl.NumberFormat(navigator.language, optionsNumberFormat).format(num)
);

// Set time out
const testArg = 'test';
const arrArgs = ['oil', 'gas', testArg];
const timerArgs = setTimeout(
  (arg1, arg2, arg3) => console.log('Pizza:', arg1, arg2, arg3),
  2000,
  ...arrArgs
);
if (arrArgs.includes('oil')) clearInterval(timerArgs);

// console.log('Waiting...:');
// setInterval - Clock
// setInterval(() => {
//   const now = new Date();
//   console.log(
//     'Clock:',
//     now.getHours() + ':' + String(now.getMinutes()).padStart('2', 0)
//   );
// }, 1000);

// Logout Timer
const labelTimer = document.querySelector('.timer');
const startLogoutTimer = (seconds) => {
  const intervalSeconds = setInterval(() => {
    const min = String(Math.trunc(seconds / 60)).padStart(2, 0);
    const sec = String(seconds % 60).padStart(2, 0);
    // console.log('Every second:', --seconds);
    labelTimer.textContent = `${min} : ${sec}`;

    if (seconds === 0) {
      console.log('Logout:');
      labelTimer.textContent = 'User is log out';
      clearInterval(intervalSeconds);
    }
    --seconds;
  }, 1000);
  console.log('Every 5 minutes:');
};

startLogoutTimer(5);
