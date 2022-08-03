/*
DESCRIPTION:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

#FUNDAMENTALS #STRINGS #ARRAYS
*/

function check(a, x) {
  return a.includes(x);
}

// Part #2
function check(a, x) {
  let res = false;
  
  for(let i = 0; i < a.length; i += 1) {
    if (a[i] === x) return res = true;
  }
  return res;
}
