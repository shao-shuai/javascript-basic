function makePerson(name, age) {
  // add code here
  let obj = {};
  obj["name"] = name;
  obj["age"] = age;
  return obj;
}

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
