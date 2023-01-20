// Declare a function 'Lottery', which takes in a positive number (called 'initialJackpot') as a single argument and returns an instance of 'Lottery' when invoked with the 'new' keyword. Lottery should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All Lottery objects should contain their own 'ticketSold' and 'currentPrizes' properties. 'ticketSold' property keeps track of the number of tickets sold and 'currentPrizes' is an array of six numbers representing six levels of prizes (starting at the lowest prize (level 6) and increasing up to the grand prize (level 1)). Each level prize is calculated by dividing the 'initialJackpot' by the corresponding level and rounding the result down. When a Lottery is first created, it should initialize the 'ticketSold' property to 0 and initialize the 'currentPrizes' property with the passed-in initialJackpot following the rule above.
// - Task 1: Declare a function 'tryLuck', which is accessible to ALL instances of 'Lottery'. 'tryLuck' should take in an array of five numbers (called 'whiteBalls') and another number (called 'powerBall') as arguments, and when invoked on a Lottery instance, should validate all numbers in the whiteBalls array (only numbers from 1 to 69 are allowed) and the powerBall number (only number from 1 to 26 are allowed). If any invalid numbers occur, return an error message. Otherwise, add them to the instance as an object with two properties ('whiteBalls' and 'powerBall') with all numbers represented under 2-digit strings, update the number of tickets sold properly and return it.
// - Task 2: Declare a function 'quickPlay', which is accessible to ALL instances of 'Lottery'. 'quickPlay' should take in no arguments, and when invoked on a Lottery instance, should function similarly to the 'tryLuck' method by randomly generating an array of five numbers as a 'whiteBalls' array and another number as a 'powerBall'. Add the 'whiteBalls' array and 'powerBall' number to the instance under an object with corresponding keys, update the number of tickets sold properly and return it.
// - Task 3: Declare a function 'luckyDraw', which is accessible to ALL instances of 'Lottery'. 'luckyDraw' should take in no arguments, and when invoked on a Lottery instance should randomly generate a 'whiteBalls' array and a 'powerBall' number, and return an array of strings (2-digit version of each number) with the length of six, in which the first five numbers are from the 'whiteBalls' array and the last one is the 'powerBall' number.
// - Task 4: Declare a function 'match', which is accessible to ALL instances of 'Lottery'. 'match' should take in no arguments, and when invoked on a Lottery instance, should check if anyone wins this draw by the following rules:
// • powerball + 5 whiteballs                   => Grand Prize
// • 5 whiteballs                               => 2nd Prize
// • powerball + 4 whiteballs                   => 3rd Prize
// • powerball + 3 whiteballs OR 4 whiteballs   => 4th Prize
// • powerball + 2 whiteballs OR 3 whiteballs   => 5th Prize
// • powerball OR powerball + 1 whiteball       => 6th Prize
// Print out the congratulations corresponding to each prize if there is a winner. If no winners are found for the Grand Prize, the Grand Prize will be increased by 6 times and other prizes will be incremented by the lowest prize in the whiteBall array. If there's a winner of any prize, return "Big congratulations to lucky winners!", otherwise, return "No winners found! The grand prize is now $*grandPrize*. Best of luck next time, future millionaires!".
// Note: After each 'match', all tickets will be no longer valid for next draws, so the 'Lottery' should be reset properly!

function Lottery(initialJackpot) {
  this.ticketSold = 0;
  this.currentPrizes = [];
  this.obj = {};
  for (let i = 1; i < 7; i++) {
    this.currentPrizes.push(Math.floor(initialJackpot / i));
  }

  this.tryLuck = function (whiteBalls, powerBall) {
    let invalid = 1;
    whiteBalls.forEach((element) => {
      if (element < 1 || element > 69) {
        invalid = 0;
      }
    });

    if (powerBall < 1 || powerBall > 26) {
      invalid = 0;
    }

    if (!invalid) {
      return "Invalid number found.";
    } else
      this.obj.whiteBalls = whiteBalls.map((s) => {
        return s.toString();
      });
    this.obj.powerBall = powerBall.toString();
    this.ticketSold += 1;
    return this.ticketSold;
  };

  this.quickPlay = function () {
    const whiteBalls = [];
    for (let i = 1; i < 6; i++) {
      whiteBalls.push(Math.floor(10 * Math.random()));
    }
    const powerBall = Math.floor(10 * Math.random());

    let invalid = 1;
    whiteBalls.forEach((element) => {
      if (element < 1 || element > 69) {
        invalid = 0;
      }
    });

    if (powerBall < 1 || powerBall > 26) {
      invalid = 0;
    }

    if (!invalid) {
      return "Invalid number found.";
    } else
      this.obj.whiteBalls = whiteBalls.map((s) => {
        return s.toString();
      });
    this.obj.powerBall = powerBall.toString();
    this.ticketSold += 1;
    return this.ticketSold;
  };

  this.luckyDraw = function () {
    let whiteBalls = [];
    for (let i = 1; i < 6; i++) {
      whiteBalls.push(Math.floor(10 * Math.random()));
    }

    let powerBall = Math.floor(10 * Math.random());

    whiteBalls.push(powerBall);
    whiteBalls = whiteBalls.map((s) => {
      return s.toString();
    });

    return whiteBalls;
  };

  this.match = function () {
    let drawBalls = this.luckyDraw();
    let whiteBalls = drawBalls.slice(0, 5);
    let powerBall = drawBalls[5];
  };
}

// const a = new Lottery(111);
// console.log(a.luckyDraw());

// Chars

function Chars(...initialString) {
  if (initialString[0]) {
    this.length = initialString[0];
  } else {
    this.length = 0;
  }
}

// const a = new Chars();
// console.log(a.length);

// OrderedList
function OrderedList() {
  this.data = [];
  this.length = 0;

  this.add = function (value) {
    if (this.data.length === 0) {
      this.data.push(value);
      this.length += 1;
    } else if (this.data.length === 1) {
      if (value > this.data[0]) {
        this.data.splice(0, 0, value);
        this.length += 1;
      } else {
        this.data.push(value);
        this.length += 1;
      }
    }
    for (let i = 0; i < this.data.length; i++) {
      if (value <= this.data[i] && value >= this.data[i + 1]) {
        this.data.splice(i + 1, 0, value);
        this.length += 1;
      }
      if (value >= this.data[i]) {
        this.data.splice(i, 0, value);
        this.length += 1;
      }
    }
  };
}

const a = new OrderedList();
a.add(99);
a.add(898989);
a.add(100);
console.log(a.data);

// Declare a function 'DuplicatedContainer', which takes in no arguments and returns an instance of a 'DuplicatedContainer' object when invoked with the 'new' keyword.
// DuplicatedContainer objects should function similarly to objects - i.e., they will store elements as key-value pairs, and the value is the number of times the key appeared in the object.
// All DuplicatedContainer objects should contain their own 'length' property, which keeps track of the number of items they contain. When a DuplicatedContainer is first created, it should have a length of 0.
// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'DuplicatedContainer'. 'add' should take in a single argument, and when invoked on a DuplicatedContainer instance, should update the number of times that value appears as a key to that DuplicatedContainer, update the DuplicatedContainer's length property appropriately, and return the length of the DuplicatedContainer.
// - Task 2: Declare a function 'update', which is accessible to ALL instances of 'DuplicatedContainer'. 'update' should take in a single argument as a callback function, and when invoked on a DuplicatedContainer instance, should update all the values (except the ‘length’ property) by applying the callback to the corresponding values of the instance.
// - Task 3: Declare a function, 'pick', which is accessible to ALL instances of 'DuplicatedContainer'. 'pick' should take in an integer K as a single argument, and when invoked on a DuplicatedContainer instance, should return the Kth-most frequently occurring property in the instance (counting from 1). If there's more than one valid answer, return any of them. If the passed-in number is not a valid pick, return "Invalid pick!".

function DuplicatedContainer() {
  this.obj = {};
  this.length = 0;

  this.add = function (value) {
    if (this.obj[value]) {
      this.obj[value] += 1;
    } else {
      this.obj[value] = 1;
      this.length += 1;
    }

    return this.lengh;
  };

  this.update = function (callback) {
    for (let key in this.obj) {
      callback(this.obj[key]);
    }
  };

  this.pick = function (k) {};
}

// const a = new DuplicatedContainer();
// a.add(1);
// a.add(1);
// console.log(a.obj);

// Declare a class 'Storage' with 2 properties: size and capacity. The 'size' property keeps track of the number of current elements in the storage. The 'capacity' property is the maximum number of elements that storage can safely store. 'Storage' classes should function similarly to an Array - i.e. they will store values at numbered indexes, starting at 0.
// - Task 1: Add a constructor to this class. The constructor takes in a single argument for the capacity property and initializes the size and the capacity. When a Storage is first created, it should have a size of 0.
// - Task 2: Declare a function 'add', which is accessible to ALL instances of 'Storage'. 'add' should take in a single argument, and when invoked on a Storage instance, should add the argument to the first available position of that Storage and return the size of the instance. However, if the 'capacity' is exceeded, return "Maximum size exceeded!".
// - Task 3: Declare a function 'remove', which is accessible to ALL instances of 'Storage'. 'remove' should take in a single argument which is the value that needs to be removed, and when invoked on a Storage instance, should remove all the properties with the corresponding value from the instance and return the size of that instance. If the value doesn’t exist, return "No values found!".
class Store {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.storage = [];
  }

  add(arg) {
    if (this.size > this.capacity - 1) {
      console.log("Maximum size exceeded!");
    } else {
      this.storage[this.size] = arg;
      this.size += 1;
      return this.size;
    }
  }

  remove(arg) {
    let removed = 0;
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === arg) {
        this.storage.splice(i, 1);
        i--;
        removed++;
      }
    }

    this.size -= removed;

    if (removed === 0) {
      return "No value found!";
    }

    return this.size;
  }
}

// const a = new Store(4);
// a.add(89);
// a.add(888);
// a.add(999);
// console.log(a);
// a.remove(888);
// console.log(a);
