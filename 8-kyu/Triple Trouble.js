/*
DESCRIPTION:
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

#PUZZLES
*/

function tripleTrouble(one, two, three) {
  let str = '';
  
  for (let i = 0; i < one.length; i += 1) {
    str += one[i] + two[i] + three[i];
  }
  return str;
}
