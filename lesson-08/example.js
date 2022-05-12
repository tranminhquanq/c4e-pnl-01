// const matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// // matrix[0][1]; // 2
// // matrix[2][1]; // 8

// for (let row = 0; row < matrix.length; row++) {
//   for (let col = 0; col < matrix[row].length; col++) {
//     console.log(matrix[row][col]);
//   }
// }

function arrayValuesTypes(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(typeof array[i]);
  }

  return output;
}

// console.log(arrayValuesTypes([1, 2, "null", []]));

function difference(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let output = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (output.includes(arr[i]) === true) {
      continue;
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}

// [1, 2, 3, 4, 2]
// [1]
// difference([1, 2], [3, 4, 2]); // [1, 2, 3, 4]

function sumMinimums(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let min = findMin(matrix[i]);
    sum += min;
  }

  console.log(sum);
}

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ]);
