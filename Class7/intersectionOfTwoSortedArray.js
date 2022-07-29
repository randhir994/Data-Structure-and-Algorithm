function intersectionOfTwoSortedArray(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
    }
    i++;
    j++;
  }
  return result;
}

console.log(
  intersectionOfTwoSortedArray(
    [1, 2, 3, 4, 5, 40, 50, 100],
    [0, 2, 10, 20, 30, 40, 90]
  )
);
