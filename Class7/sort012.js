// function sort012(arr) {
//   let zero = 0;
//   let one = 0;
//   let two = 0;
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) zero++;
//     if (arr[i] === 1) one++;
//     if (arr[i] === 2) two++;
//   }

//   while (zero--) {
//     result.push(0);
//   }
//   while (one--) {
//     result.push(1);
//   }
//   while (two--) {
//     result.push(2);
//   }

//   return result;
// }

function sort012(arr) {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zero++;
    if (arr[i] === 1) one++;
    if (arr[i] === 2) two++;
  }

  let i = 0;
  while (zero--) {
    arr[i] = 0;
    i++;
  }
  while (one--) {
    arr[i] = 1;
    i++;
  }
  while (two--) {
    arr[i] = 2;
    i++;
  }

  return arr;
}

console.log(sort012([0, 2, 0, 1, 2, 0, 1]));
