/*
DESCRIPTION:
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

#DEBUGGING
*/

function getMax1() {
  const max = {
    name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  return getMax1();
}

