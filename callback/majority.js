// ADD CODE HERE
function majority(array, callback) {
  let res = { true: 0, false: 0 };
  array.forEach((element) => {
    if (callback(element) === true) {
      res["true"] += 1;
    } else {
      res["false"] += 1;
    }
  });

  return res["true"] > res["false"];
}
// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
