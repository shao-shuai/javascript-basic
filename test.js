const a = [1, 2, 3, 4, 5];

function eq(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// console.log(eq(4, 4));
const [first, ...rest] = a;
console.log(first);
console.log(rest);
console.log(Math.abs(10 - 19));
const arr = [];
console.log(arr.unshift(10));
console.log(arr.unshift(2));
