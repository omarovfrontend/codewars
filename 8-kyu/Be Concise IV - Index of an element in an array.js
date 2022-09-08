/*
DESCRIPTION:
Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

#REFACTORING
*/

const find = (a, e) => {
  return (a.indexOf(e) !== -1) ? a.indexOf(e) : 'Not found';
}
