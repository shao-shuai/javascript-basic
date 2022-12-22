function createSecretHolder(secret) {
  let num = secret;
  const obj = {
    getSecret() {
      return num;
    },
    setSecret(n) {
      num = n;
    },
  };
  return obj;
}

function roulette(num) {
  return () => {
    console.log(num);
    if (num != 1) {
      console.log("spin");
      num--;
    } else {
      console.log("done");
    }
  };
}

let obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2
console.log([1, 2, 3, 4].slice(0, -1));
