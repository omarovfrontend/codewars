/*
DESCRIPTION:
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

#DEBUGGING
*/

function createArray(number) {
  const newArray = [];
  
  for (let i = 1; i <= number; i += 1) {
    newArray.push(i);
  }
  return newArray;
}
