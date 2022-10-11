const personStore = {
  greet: function () {
    console.log("hello");
  },
};

function personFromPersonStore(name, age) {
  // add code here
  let obj = Object.create(personStore);
  obj["name"] = name;
  obj["age"] = age;

  return obj;
}

const sandra = personFromPersonStore("Sandra", 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
