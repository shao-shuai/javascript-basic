// Question: https://csx.codesmith.io/units/callbacks/challenge-map
function subtractTwo(num) {
  return num - 2;
}

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }

  return newArr;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo));
