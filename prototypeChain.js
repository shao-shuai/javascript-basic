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

a = { h: 3, m: 4 };
b = Object.create(null);
b.time = 555;
c = Object.create(a);

const user1 = userCreate("shuai", 99);
user1.increment();
console.log(user1);
console.log(userCreate.length);
console.log(Array.prototype);
console.log(Array.__proto__);
console.log(a["h"].toString());
console.log(b.time.toString());
console.log(c.h);
