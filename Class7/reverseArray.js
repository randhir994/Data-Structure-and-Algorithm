// function reverseArray(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }

//   return arr;
// }

// function reverseArray(arr) {
//   let result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       result.push(arr[i])
//   }
//   return result;
// }

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([10, 20, 30, 40, 50]));
