// 7 kyu Sum of Minimums!
// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

// Note: You will be always given non-empty array containing Positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
  let sumRow = 0;
     for (let i=0; i<arr.length; i++){
       sumRow += Math.min.apply(Math,arr[i])
      //  console.log(Math.min.apply(Math,arr[i]))
  }
return sumRow
}
console.log(sumOfMinimums([[7, 3, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))