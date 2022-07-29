// function maxInArray(arr) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

function maxInArray(arr) {
    return Math.min(...arr);
  }

console.log(maxInArray([1, 2, 7, -10, 3, 4, 5]));
console.log(maxInArray([10, 20, 90, 0, 30, 40, 50]));
