/*
DESCRIPTION:
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

#STRINGS #DEBUGGING
*/

const FilterNumbers = function(str) {
  return str.replace(/[0-9]/g, '');
}
