// function maxInArray(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

function maxInArray(arr) {
  return Math.max(...arr);
}

console.log(maxInArray([1, 2, 7, 3, 4, 5]));
console.log(maxInArray([10, 20, 90, 30, 40, 50]));
