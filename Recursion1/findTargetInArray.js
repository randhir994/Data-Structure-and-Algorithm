function findTargetInArray(arr, target, index = 0) {
  if (index === arr.length) return -1;

  if (arr[index] === target) return index;

  return findTargetInArray(arr, target, index + 1);
}

console.log(findTargetInArray([10, 20, 49, 6, 2, 9], 60));
