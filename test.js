// a = "Anne, I vote more cars race Rome-to-Vienna";
// console.log(a.replace(/[\W_]+/g, " ").toLowerCase());
// let a = [3];
// let b = [1, 2, 3];

// console.log(a.concat(b));
// console.log([3].concat([1, 2, 3]).concat([10, 12]));
const arr = [1, 4, 6, 7, 9, 17, 45];

function binar(arr, num) {
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    mid = Math.round((left + right) / 2);
    if (num > arr[mid]) {
      left = mid + 1;
    } else if (num < arr[mid]) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(binar(arr, 10));
