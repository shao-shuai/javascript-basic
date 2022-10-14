// using New keyword
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.login = function () {
  console.log("Logged in!");
};

const user1 = new UserCreator("Shuai", 99);
const user2 = new UserCreator("Jia", 100);
user3 = { h: 3, m: 4 };

console.log(user1.__proto__);
console.log(user1.prototype);
console.log(user3.prototype);
