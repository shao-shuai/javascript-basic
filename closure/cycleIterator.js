// ADD CODE HERE
function cycleIterator(array) {
  let index = 0;
  return () => {
    if (index === array.length) {
      index = 0;
      return array[index];
    }

    return array[index++];
  };
}
// Uncomment these to check your work!
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
