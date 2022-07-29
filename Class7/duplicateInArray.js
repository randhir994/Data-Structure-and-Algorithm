function duplicateInArray(arr) {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] > 1) {
      result.push(Number(key));
    }
  }

  return result;
}

console.log(duplicateInArray([1, 3, 4, 2, 2]));
console.log(duplicateInArray([3, 1, 3, 4, 2]));
