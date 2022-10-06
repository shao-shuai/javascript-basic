// ADD CODE HERE
function createFunction() {
  return () => {
    console.log("hello world");
  };
}
// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
