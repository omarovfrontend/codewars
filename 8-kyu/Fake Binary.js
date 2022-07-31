/*
DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

#FUNDAMENTALS #STRINGS #ARRAYS
*/

function fakeBin(x) {
  let res = '';
  
  for (let i = 0; i < x.length; i += 1) {
    (x[i] < 5) ? res += 0 : res += 1;
  }
  return res;
}

// Part #2
function fakeBin(x) {
  let res = '';
  
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] < 5) {
      res += 0;
    } else {
      res += 1;
    } 
  }
  return res;
}

// Part #3
const fakeBin = (x) => x.split('').map(el => el < 5 ? 0 : 1).join('');
