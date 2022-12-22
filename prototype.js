function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

const test = new Person("shuai", "shao", 19, "brown");
console.log(test.nationality);
console.log(test.__proto__);
