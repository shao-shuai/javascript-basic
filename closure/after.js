// ADD CODE HERE
function after(num, callback) {
  let counter = 0;
  return (str) => {
    while (counter < num) {
      console.log(undefined);
      counter++;
    }

    callback(str);
  };
}
const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed
