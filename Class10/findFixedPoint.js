function findFixedPoint(arr, target) {
  let firstOccur = -1;
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = parseInt((s + e) / 2);

    // console.log(mid);
    if (arr[mid] === target) {
      firstOccur = mid;
      e = mid - 1;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    }
  }
  return firstOccur;
}

console.log(findFixedPoint([2, 5, 8, 12, 12, 12, 50, 89], 12));
console.log(findFixedPoint([2, 5, 5, 5, 8, 12, 50, 89], 5));
