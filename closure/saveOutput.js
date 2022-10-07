// ADD CODE HERE
function saveOutput(callback, str) {
  let obj = {};
  return (arg) => {
    if (arg != str) {
      obj[arg] = callback(arg);
      return obj[arg];
    } else return obj;
  };
}

// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }
