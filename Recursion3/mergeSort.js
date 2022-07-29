function mergeSortedArray(arr, s, e) {
  const mid = parseInt((s + e) / 2);
  let first = arr.slice(s, mid + 1);
  let second = arr.slice(mid + 1);

  let index1 = 0;
  let index2 = 0;
  let mainArrayIndex = s;

  while (index1 < first.length && index2 < second.length) {
    if (first[index1] < second[index2]) {
      arr[mainArrayIndex++] = first[index1++];
    } else {
      arr[mainArrayIndex++] = second[index2++];
    }
  }

  while (index1 < first.length) {
    arr[mainArrayIndex++] = first[index1++];
  }

  while (index2 < second.length) {
    arr[mainArrayIndex++] = second[index2++];
  }

  delete first;
  delete second;
}

function mergeSort(arr, s, e) {
  //   console.log(arr);

  if (s >= e) return;

  const mid = parseInt((s + e) / 2);
  mergeSort(arr, s, mid);

  mergeSort(arr, mid + 1, e);

  mergeSortedArray(arr, s, e);

  return arr;
}
const arr1 = [12, 11, 5, 6, 7, 5, 2, 3];
console.log(mergeSort(arr1, 0, arr1.length - 1));

// const arr2 = [2, 5, 1, 6, 9];
// const arr2 = [4, 2, 1, 5, 3];

// const arr2 = [3, 7, 0, 1, 5, 8, 3, 2, 34, 66, 86, 23, 12, 12, 12];
const arr2 = [3, 1, 4, 5, 2];

console.log(mergeSort(arr2, 0, arr2.length - 1));
