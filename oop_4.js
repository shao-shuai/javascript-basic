// function Range(from, to) {
//   this.from = from;
//   this.to = to;
// }

// Range.prototype = {
//   greet() {
//     console.log("hello");
//   },
// };

// Range.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.from}`);
// };

// let range = new Range(1, 10);
// console.log(range);
// range.greet();
// range.introduce();

function PersonConstructor() {
  // create a property with this keyword
  this.greet = () => {
    console.log("hello");
  };
}

function userFactory(name, score) {
  let user = new userFunctionStore();
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const user1 = userFactory("shuai", 100);
console.log(user1);
