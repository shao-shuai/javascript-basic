/*
QUESTION 1a
Declare a variable 'number' and set it to the value 10.
*/

// let number = 10;

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2a
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function
*/

// i: number
// o: number

function addNumbers(num) {
  if (num === 1) {
    return 1;
  }

  return num + addNumbers(num - 1);
}

// console.log(addNumbers(15));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3a
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50And500(num) {
  return num > 50 && num < 500;
}

// console.log(between50And500(45));
// console.log(between50And500(472));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4a
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(num) {
  if (num % 100 === 0) {
    return true;
  }

  return false;
}

// console.log(divBy100(120));
// console.log(divBy100(600));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5a
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num) {
  return num < 0 || num % 2 === 0;
}

// console.log(negativeOrEven(7));
// console.log(negativeOrEven(-3));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6a
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false

Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
*/

// i: array, targ (num)
// o: bool

function passAllTests(arrOfFuncs, value) {
  let res = true;
  for (let i = 0; i < arrOfFuncs.length; i++) {
    if (arrOfFuncs[i](value) === false) {
      return false;
    }
  }

  return res;
}

const arrs = [between50And500, divBy100, negativeOrEven];
// console.log(passAllTests(arrs, 300));
// console.log(passAllTests(arrs, 250));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7a
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("domain"));

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8 a
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num) {
  return (arg) => {
    return num + arg;
  };
}

// const addBy10 = add(10);
// console.log(addBy10(20));

//////////////////////////////////////////////////////////////////////////////////////
/* 
QUESTION 9a
Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
*/

// i: string
// o: number

function getLength(str) {
  if (str[0] && !str[1]) {
    return 1;
  }

  return 1 + getLength(str.substring(1));
}

// console.log(getLength("nihao"));

//////////////////////////////////////////////////////////////////////////////////////

/*
Question 10a
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1],
                                           [8, 5, 2],
                                           [9, 6, 3] ]
*/

///////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 1b
Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Question 2b
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function ‘societyName’ that takes in an array of names and returns the name of the secret society. For example, if our input is [‘Adam’, ‘Sarah’, ‘Malcolm’] then ‘societyName’ should return the string ‘AMS’
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3b
Create a function “countTimes” that takes in two arguments (an array and a search value). “countTimes” should return the number of times the search value is present in the array.
Example: countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4b
Create a function called “wordSearchLetterCounter” that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for). “wordSearchLetterCounter” should use your “countTimes” function to count the total number of times a letter show up in the word search.
Example: wordSearchLetterCounter([ [“D”, “E”, “Y”, “H”, “A”, “D”], [“C”, “B”, “Z”, “Y”, “J”, “K”], [“D”, “B”, “C”, “A”, “M”, “N”], [“F”, “G”, “G”, “R”, “S”, “R”], [“V”, “X”, “H”, “A”, “S”, “S”] ], “D”) ➞ 3 “D” shows up 3 times: twice in first row, once in third row.

	// let letterArr = [["D", "E", "Y", "H", "A", "D"],
	// ["C", "B", "Z", "Y", "J", "K"],
	// ["D", "B", "C", "A", "M", "N"],
	// ["F", "G", "G", "R", "S", "R"],
	// ["V", "X", "H", "A", "S", "S"]]
  
//"D" shows up 3 times: twice in first row, once in third row.
// console.log(wordSearchLetterCounter(letterArr, 'D', countTimes)); //3
// console.log(wordSearchLetterCounter(letterArr, 'A', countTimes)); //3
// console.log(wordSearchLetterCounter(letterArr, 'a', countTimes)); //0
*/

function wordSearchLetterCounter(arr, word) {
  let res = 0;

  arr.forEach((ar) => {
    ar.forEach((element) => {
      if (element === word) {
        res += 1;
      }
    });
  });

  return res;
}
// let letterArr = [
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"],
// ];
// console.log(wordSearchLetterCounter(letterArr, "D")); //3
// console.log(wordSearchLetterCounter(letterArr, "A")); //3
// console.log(wordSearchLetterCounter(letterArr, "a")); //0

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5b
Create a function “concatWithSpace” that takes in two arguments (both will be strings). “concatWithSpace” should return the two strings concatenated with a space in between them. For example, if the arguments are “hello” and “world” then “concatWithSpace” should return “hello world”.
*/

//////////////////////////////////////////////////////////////////////////////////////

function concatWithSpace(str1, str2) {
  return str1 + " " + str2;
}

// console.log(concatWithSpace("hello", "world"));

/*
QUESTION 6b
Create a function called “shorten”. “shorten” takes three arguments (an array, a function, and an initial value). “shorten” is designed to shorten this array’s multiple values to just one value by applying the callback function to each of the values in the array. This is how it works:

The shorten function will have an “accumulator value” which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
The array is iterated over, passing the accumulator value and the next array element to the callback function.
The callback function’s returned value becomes the new accumulator value
The next loop executes with the new accumulator value.

Check that your ‘shorten’ function is working correctly by passing an array to it with the string values ‘is’, ‘so’, ‘much’ and ‘fun!’ as the first argument. Pass your concatWithSpace function as our callback and the string ‘Programming’ as the initialValue argument. The result of this call to shorten should be the string ‘Programming is so much fun!’ */

//////////////////////////////////////////////////////////////////////////////////////

function shorten(array, func, val) {
  return array.reduce((accu, cur) => {
    return func(accu, cur);
  }, val);
}

// const str = ["is", "so", "much", "fun!"];

// console.log(shorten(str, concatWithSpace, "program"));

/*
QUESTION 7b
Create a function “countChar” that takes two arguments (an input string and a target string). “countChar” will return the number of times the target string is found in the input string.

Example: countChar(‘hello world’, ‘o’); -> 2 countChar(‘javascript’, ‘j’); -> 1 Note: Do not use any native JS methods, or loops. */

function countChar(str, target) {
  if (str[0] && !str[1]) {
    if (str[0] === target) {
      return 1;
    } else {
      return 0;
    }
  }

  if (str[0] === target) {
    return 1 + countChar(str.substring(1), target);
  } else {
    return countChar(str.substring(1), target);
  }
}

console.log(countChar("hello world", "o"));
