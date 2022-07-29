function cyclicallyRotateArrayByOne(arr) {
  let lastItem = arr.pop();
  arr.unshift(lastItem);
  return arr;
}

function cyclicallyRotateArrayByOne(arr) {
  let lastItem = arr[arr.length - 1];
  return [lastItem, ...arr];
}

console.log(cyclicallyRotateArrayByOne([1, 2, 7, 3, 4, 5]));
console.log(cyclicallyRotateArrayByOne([10, 20, 90, 30, 40, 50]));
