// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// function linearSearch(arr, target) {
//   return arr.indexOf(target);
// }

function linearSearch(arr, target) {
  return arr.findIndex((item) => item === target);
}

console.log(linearSearch([2, 3, 6, 4, 8], 4));
console.log(linearSearch([2, 3, 6, 4, 8], 1));

