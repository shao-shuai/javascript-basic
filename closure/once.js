// ADD CODE HERE
function once(callback) {
  let counter = 0;
  let res = 0;
  return (num) => {
    counter += 1;
    if (counter === 1) {
      res = callback(num);
      return res;
    } else return res;
  };
}
const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
