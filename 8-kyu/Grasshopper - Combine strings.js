/*
DESCRIPTION:
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

#FUNDAMENTALS
*/

const combineNames = (a, b) => a + ' '.concat(b);

// Part #2
function combineNames(arr1, arr2) {
  return `${arr1} ${arr2}`;
}
