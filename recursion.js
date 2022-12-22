// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function countdown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);

// Challenge 2
function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sum(array.slice(1));
}

// uncomment these to check your work
// console.log(sum([1, 1, 1])); // -> returns 3
// console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

// Challenge 3
function palindrome(string) {
  // remove all non-alphanumeric characters
  str = string.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();

  if (str.length <= 1) return true;

  // base case
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return palindrome(str.substring(1, str.length - 1));
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

// Challenge 4

function isPrime(num) {}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

//Challenge 5
function pathFinder(obj, arr) {
  if (arr.length === 1) {
    return obj[arr];
  }
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"

//Challenge 6
function flattenRecursively(arr) {}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

//Challenge 7
function findInOrderedSet(arr, target) {}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

//Challenge 8
function countWaysToReachNthStair(n) {}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

//Challenge 9
function getPermutations(arr) {}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//Challenge 10
function getRangeBetween(x, y) {}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]