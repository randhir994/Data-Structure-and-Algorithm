function twoNumberSum(arr, target) {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const secondNumber = target - arr[i];
    if (secondNumber in map) {
      result.push(arr[i], target - arr[i]);
    } else {
      map[arr[i]] = i;
    }
  }

  return result;
}

console.log(twoNumberSum([3, 1, 4, 2], 7));
console.log(twoNumberSum([3, 1, 3, 4], 6));
