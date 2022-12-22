/* 
Declare a variable called 'secret'. Set it to a string containing the numbers 1,2,3,4, and 5.
*/

// define a variable which includes the numbers of 1,2,3,4, and 5
let secret = "12345";
// console.log(str)

/* 
Declare a function, 'charToNumPlusTwo'. 'charToNumPlusTwo' should take the stringified version of a number as an argument, and returns another string representing that number plus two.
*/

// declare a function called charToNumPlusTwo
function charToNumPlusTwo(num) {
  // declare a local variable called result
  let result;

  // convert num to a number
  result = Number(num);

  // increase num by 2
  result = result + 2;

  // convert num back to a string
  result = result.toString();

  // return num
  return result;
}

//console.log(charToNumPlusTwo("2"));

/* 
Declare another function, 'encode', which takes a string and a callback as arguments.
'encode' should return an encoded version of the string, in which each character is replaced with the result of passing it into the callback.
*/

// declare a function called encode
// 2 inputs: first input is a string, second is a callback

function encode(str, callback) {
  // create a local variable
  let res = "";

  // iterate str and update the local variable
  for (let i = 0; i < str.length; i++) {
    res = res + callback(str[i]);
  }

  // return the local variable
  return res;
}

// Test your 'encode' function by calling it with the 'secret' and 'charToNumPlusTwo'. This should return the string '34567'.
//console.log(encode(secret, charToNumPlusTwo));

/* 
Declare a function, 'callbackSequence', which takes in two arguments - an array of callbacks, and a single value - and returns a function.
The returned function, each time it is invoked, should run one of the callbacks on the value that was passed into the outer function, and return its result. It should cycle through the array of callbacks in order (i.e. invoking the first on the first call, second on the second call, etc). After all of them have run, it should reset to the first callback and continue the cycle.
*/

// declare function called callbackSequence
function callbackSequence(arrOfCallbacks, value) {
  // defined an index to track which callback we are using
  let index = 0;

  // return a function
  // increment the index by 1
  return () => {
    if (index === arrOfCallbacks.length) {
      index = 0;
    }
    let curFunc;
    let res;
    curFunc = arrOfCallbacks[index];
    res = curFunc(value);
    index += 1;

    return res;
  };

  // each time the returned function is called,
}

/*
Declare a 'multiplyBy2' function, 'multiplyBy3' function and a 'multiplyBy4' function. Use these functions to test that your 'callbackSequence' function is working properly.
*/
function multiplyBy2(num) {
  return num * 2;
}

function multiplyBy3(num) {
  return num * 3;
}

function multiplyBy4(num) {
  return num * 4;
}

const arrOfFuncs = [multiplyBy2, multiplyBy3, multiplyBy4];

const returned = callbackSequence(arrOfFuncs, 10);
// console.log(returned());
// console.log(returned());
// console.log(returned());
// console.log(returned());

/* 
Declare a recursive function 'divisible' that takes in at least two arguments (a number, and an array of numbers). It should return true if ALL numbers in the array are equally divisible by the single number argument. If any of the numbers in the array are not equally divisible, return false.
Once complete, write some code to test your 'divisible' function.
*/
// declare function called divisible
function divisible(num, arrOfNums) {
  // define base case
  if (arrOfNums.length === 1) {
    if (arrOfNums % num === 0) {
      return true;
    } else return false;
  }

  // call call function recursively
  return arrOfNums[0] % num === 0 && divisible(num, arrOfNums.slice(1));
}

let num = 2;
const arr1 = [2, 4, 6];
const arr2 = [2, 4, 5];

console.log(divisible(num, arr1));
console.log(divisible(num, arr2));

/* 
Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
All List objects should contain their own 'length' property, which keeps track of the number of items they contain. When a List is first created, it should have a length of 0.
*/

// declare a function called List

function List() {
  // use Object.create to create a new object
  const obj = Object.create(array);
}
