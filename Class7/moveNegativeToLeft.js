function moveNegativeToLeft(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(moveNegativeToLeft([1, 2, -7, -3, 4, 5]));
console.log(moveNegativeToLeft([10, 20, -90, 30, 40, -50]));
