// ADD CODE HERE
function intersection(arrays) {
  let acc = arrays.pop();

  while (arrays.length) {
    const current = arrays.pop();
    const newArr = [];

    current.forEach((element) => {
      if (acc.includes(element)) newArr.push(element);
    });

    acc = newArr;
  }

  return acc;
}

function overlap(arr1, arr2) {
  let newArr = [];
  arr1.forEach((element) => {
    if (arr2.includes(element)) newArr.push(element);
  });

  return newArr;
}

function reduce(arrays, callback) {
  let res = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    res = callback(res, arrays[i]);
  }

  return res;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
console.log(reduce([arr1, arr2, arr3], overlap));
