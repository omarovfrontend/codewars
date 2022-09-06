/*
DESCRIPTION:
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

#FUNDAMENTALS
*/

function distinct(a) {
  return a.filter((el, i) => a.indexOf(el) === i);
}

// Part #2
function distinct(a) {
  return [...new Set(a)];
}
