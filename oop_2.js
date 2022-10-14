// using prototype chain

function userCreater(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in!");
  },
};

const user1 = userCreater("Shuai", 99);
const user2 = userCreater("Jia", 100);

console.log(user1.__proto__);
