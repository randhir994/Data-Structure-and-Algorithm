function uniqueNumberOfOccurrences(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      return true;
    }

    map[arr[i]] = map[arr[i]] + 1 || 1;
  }

  return false;
}

console.log(uniqueNumberOfOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueNumberOfOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
console.log(uniqueNumberOfOccurrences([1, 2]));
