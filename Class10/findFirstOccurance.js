function findFirstOccurance(arr, target) {
  let firstOccur = -1;
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = parseInt((s + e) / 2);

    // console.log(mid);
    if (arr[mid] === target) {
      firstOccur = mid;
      e = mid - 1;
    }
    if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return firstOccur;
}
console.log(findFirstOccurance([2, 3, 3, 12, 17, 23], 3));
// console.log(findFirstOccurance([2, 5, 8, 12, 12, 12, 50, 89], 12));
// console.log(findFirstOccurance([2, 5, 5, 5, 8, 12, 50, 89], 5));
