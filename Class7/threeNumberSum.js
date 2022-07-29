function threeNumberSum(arr, target) {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let secondNumber = arr[i] + arr[i + 1];

    if (target - secondNumber in map) {
      result.push([arr[i], arr[i + 1], target - secondNumber]);
    } else {
      map[arr[i]] = [arr[i], arr[i + 1]];
    }
  }

  return result;
}

console.log(threeNumberSum([-1, 0, 1, 2, -1, -4], 0));
// console.log(threeNumberSum([3, 1, 3, 4], 10));
