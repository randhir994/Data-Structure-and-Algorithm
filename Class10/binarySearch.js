// O(logn), O(1)
function binarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = parseInt((s + e) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 8, 12, 50, 89], 12));
console.log(binarySearch([2, 5, 8, 12, 50, 89], 10));

