// function swapAdjacent(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i + 1]) {
//       const temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return arr;
// }

// function swapAdjacent(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i + 1]) {
//       const temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//     i += 2;
//   }

//   return arr;
// }

function swapAdjacent(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    i += 2;
  }

  return arr;
}

console.log(swapAdjacent([1, 2, 7, -10, 3, 4, 5]));
console.log(swapAdjacent([10, 20, 90, 1, 30, 40, 50]));
