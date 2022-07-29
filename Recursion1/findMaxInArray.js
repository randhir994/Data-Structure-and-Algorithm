function findMaxInArray(arr, index = 0, max = -Infinity) {
  if (index === arr.length - 1) return max;

  if (max < arr[index]) {
    max = arr[index];
  }

  return findMaxInArray(arr, index + 1, max);
}

console.log(findMaxInArray([10, 20, 49, 6, 2, 9]));
