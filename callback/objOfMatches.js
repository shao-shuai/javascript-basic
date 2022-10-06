// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  let obj = {};
  arr1.forEach((element, index) => {
    if (callback(element) === arr2[index]) {
      obj[element] = arr2[index];
    }
  });

  return obj;
}

// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
