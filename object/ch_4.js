const personStore = {
  // add code here
  greet: () => {
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

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

// add code here
sandra.introduce = () => {
  console.log(`Hi, my name is ${this.name}`);
};

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
console.log(sandra.__proto__);
console.log(sandra.prototype);
