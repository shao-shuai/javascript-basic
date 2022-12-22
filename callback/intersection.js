function intersection(arrays) {
  return arrays.reduce((accumulator, currentArray) => {
    const results = [];
    accumulator.forEach((element) => {
      if (currentArray.includes(element)) {
        results.push(element);
      }
    });

    return results;
  });
}

function union(arrays) {
  return arrays.reduce((preArr, curArr) => {
    curArr.forEach((element) => {
      if (!preArr.includes(element)) {
        preArr.push(element);
      }
    });
    return preArr;
  }, []);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
console.log(union([arr1, arr2, arr3]));
// console.log(reduce([arr1, arr2, arr3], overlap));
