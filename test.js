const arr = [true, true, false, false, true];
const a = arr.forEach((ele, index) => {
  if (ele === true) {
    return index;
  }
});
console.log(a);
