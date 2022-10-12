function userCreate(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}
// this is worth digging deeper
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreate("shuai", 99);
user1.increment();
console.log(user1);
console.log(userCreate.length);
