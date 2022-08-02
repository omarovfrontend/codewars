/*
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

#FUNDAMENTALS #FUNCTIONAL PROGRAMMING
*/

function find_average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// Part #2
function find_average(arr) {
  if (arr.length === 0) return 0;
  
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
  }
  return res / arr.length;
}
