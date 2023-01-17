// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i]));
  }

  return arr;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// Test case
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// Challenge 5
function mapWith(array, callback) {
  return array.forEach((element, index) => {
    array[index] = callback(element);
  });
}

// Test case
// console.log(map([1, 2, 3], addTwo));

// Challenge 6
function reduce(array, callback, initialValue) {
  let accu = initialValue;
  for (let i = 0; i < array.length; i++) {
    accu += array[i];
  }

  return accu;
}

function reduce2(array, callback, initialValue) {
  let accu = initialValue + array[0];

  for (let i = 1; i < array.length; i++) {
    accu = callback(accu, array[i]);
  }

  return accu;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce2(nums, add, 0)); //-> 8

// Test case
// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
// Construct a function intersection that takes in an array of arrays,
// compares the inner arrays, and returns a new array with elements found in all of them.
// BONUS: Use reduce!
function intersection(arrays) {
  return arrays.reduce((preArr, curArr) => {
    const res = [];
    preArr.forEach((element) => {
      if (curArr.includes(element)) {
        res.push(element);
      }
    });
    console.log(preArr);
    console.log(curArr);
    console.log(res);

    return res;
  });
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 20],
  ])
);
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((preArr, curArr) => {
    curArr.forEach((element) => {
      if (!preArr.includes(element) === true) {
        preArr.push(element);
      }
    });

    return preArr;
  }, []);
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const obj = {};

  // Can use forEach also
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }

  return obj;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const obj = {};

  arrVals.forEach((element) => {
    arrCallbacks.forEach((func) => {
      if (obj[element] === undefined) {
        obj[element] = [func(element)];
      } else {
        obj[element].push(func(element));
      }
    });
  });

  return obj;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const res = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      res[key] = obj[key];
    }
  }

  return res;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let one = 0;
  let zero = 0;

  array.forEach((element) => {
    if (callback(element) === true) {
      one += 1;
    } else {
      zero += 1;
    }
  });

  return one > zero;
}

// /*** Uncomment these to check your work! ***/
// const isOddd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOddd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOddd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  let yes = [];
  let no = [];

  array.forEach((element) => {
    if (callback(element) === true) {
      yes.push(element);
    } else {
      no.push(element);
    }
  });

  return yes.concat(no);
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// ); // should log:
// ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  const obj = {};

  array.forEach((element) => {
    let val = callback(element);
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
  });

  return obj;
}

// /*** Uncomment these to check your work! ***/
// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const obj = {};

  array.forEach((element) => {
    let val = callback(element);

    if (obj[val] === undefined) {
      obj[val] = [element];
    } else {
      obj[val].push(element);
    }
  });

  return obj;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  const res = [];

  for (let i in obj) {
    if (callback(obj[i]) === true) {
      res.push(i);
    }
  }

  return res;
}

// /*** Uncomment these to check your work! ***/
// const sunny = {
//   mac: "priest",
//   dennis: "calculating",
//   charlie: "birdlaw",
//   dee: "bird",
//   frank: "warthog",
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === "bird";
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value));
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const res = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      res[key] = obj[key];
    }
  }

  return res;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  const res = [];
  arrOfFuncs.forEach((func) => {
    res.push(func(value));
  });
  let trueTimes = res.reduce((accu, cur) => {
    return accu + cur;
  });

  return (trueTimes / res.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((prev, cur) => {
    return cur(prev);
  }, value);
}

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let large = 0;
  let res;

  for (let func in objOfFuncs) {
    if (objOfFuncs[func](subject) > large) {
      res = func;
      large = objOfFuncs[func](subject);
    }
  }

  return res;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((prev, cur) => {
    return cur(prev);
  }, startVal);
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  let inde;
  array.forEach((element, index) => {
    if (callback(element) === true) {
      inde = index;
    }
  });
  if (inde) {
    return inde;
  } else {
    return -1;
  }
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
