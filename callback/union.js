// // ADD CODE HERE
// function union(arrays, callback) {
//   let res = arrays[0];
//   for (let i = 1; i < arrays.length; i++) {
//     res = callback(res, arrays[i]);
//   }

//   return res;
// }

// function reduce(arr1, arr2) {
//   arr1.forEach((element) => {
//     if (!arr2.includes(element)) {
//       arr2.push(element);
//     }
//   });
//   return arr2;
// }
// // Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3], reduce)); // should log: [5, 10, 15, 88, 1, 7, 100]
// console.log(reduce(arr1, arr2));

// let a = [1, 2, 3, 4, 5];
// console.log(a.reduce((x, y) => x + y, 2));

// ADD CODE HERE
// combine reduce and forEach together
function union(arrays) {
  return arrays.reduce(
    (output, current) => {
      current.forEach((element) => {
        if (!output.includes(element)) {
          output.push(element);
        }
      });
      return output;
    },
    [999999]
  );
}

function cascade(s) {
  s = s.toString();
  console.log(s);
  if (s.length === 1) return; // exit condition
  cascade(s.slice(0, -1));
  console.log(s);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.time();
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
console.log(cascade(111));
console.timeEnd();
