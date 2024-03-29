/*
DESCRIPTION:
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

#ALGORITHMS
*/

function elevator(left, right, call) {
  if(left === 0 && right === 1 && call === 0 ||
     left === 0 && right === 2 && call === 0 ||
     left === 1 && right === 0 && call === 1 ||
     left === 1 && right === 0 && call === 2 ||
     left === 1 && right === 2 && call === 0 ||
     left === 1 && right === 2 && call === 1 ||
     left === 2 && right === 0 && call === 2 ||
     left === 2 && right === 1 && call === 2) {
    return 'left';
  } else {
    return 'right';
  }
}

// Part #2
function elevator(left, right, call){
  return (left - call) ** 2 < (right - call) ** 2 ? 'left' : 'right';
}
