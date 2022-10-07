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

const addByTwoOnce_2 = once_2(function (num) {
  return num + 2;
});

function once_2(callback) {
  let called = false;
  let res;

  return (...args) => {
    if (!called) {
      called = true;
      res = callback(...args);
    }

    return res;
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
console.log(addByTwoOnce_2(5)); //should log 7
console.log(addByTwoOnce_2(10)); //should log 7
console.log(addByTwoOnce_2(9001)); //should log 7
