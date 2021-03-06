/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

#ARRAYS #LISTS #FUNDAMENTALS
*/

function squareSum(numbers) {
  if (numbers.length === 0) return 0;

  let numSquared = numbers.map(el => {
    return Math.pow(el, 2);
  })

  let res = 0;
  for(let i = 0; i < numSquared.length; i += 1) {
    res += numSquared[i];
  }
  return res;
}

// Part #2
function squareSum(numbers) {
  return (numbers.length === 0) ? 0 : numbers.map(el => {
    return el ** 2;
  }).reduce((a, b) => a + b, 0);
}

// Part #3
function squareSum(numbers) {
  return numbers.map(el => el * el).reduce((a, b) => a + b, 0);
}
