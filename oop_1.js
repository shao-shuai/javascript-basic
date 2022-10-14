// generate objests using a function

function userCreater(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreater("Shuai", 99);
const user2 = userCreater("Jia", 100);

console.log(user1);
console.log(user2);
