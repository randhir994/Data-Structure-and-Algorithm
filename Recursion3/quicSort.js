function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function partition(arr, s, e) {
  let pivot = arr[s];

  let cnt = 0;

  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivot) {
      cnt++;
    }
  }

  let pivotIndex = s + cnt;
  swap(arr, s, pivotIndex);

  let i = s;
  let j = e;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j++;
    }

    console.log(i, j);

    if (i < pivotIndex && j > pivotIndex) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return pivotIndex;
}

function quickSort(arr, s, e) {
  if (s >= e) return;

  const pivotIndex = partition(arr, s, e);

  quickSort(arr, s, pivotIndex - 1);

  quickSort(arr, pivotIndex + 1, e);

  return arr;
}
// const arr1 = [12, 11, 5, 6, 7, 5, 2, 3];
// console.log(quickSort(arr1, 0, arr1.length - 1));

const arr2 = [2, 4, 1, 6, 9];
// const arr2 = [4, 2, 1, 5, 3];

// const arr2 = [3, 7, 0, 1, 5, 8, 3, 2, 34, 66, 86, 23, 12, 12, 12];
// const arr2 = [3, 1, 4, 5, 2];

console.log(quickSort(arr2, 0, arr2.length - 1));
