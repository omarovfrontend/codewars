/*
DESCRIPTION:
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

#STRINGS #ALGORITHMS
*/

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Part #2
function reverseWords(str) {
  let arr = str.split(' ');
  let arrReverse = [];
  
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    arrReverse.push(arr[i]);
  }
  return arrReverse.join(' ');
}
