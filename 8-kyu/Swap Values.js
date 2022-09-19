/*
DESCRIPTION:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

#DEBUGGING #ARRAYS #FUNDAMENTALS
*/

function swapValues(args) {
  const temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

// Part #2
const swapValues = (args) => args.reverse();
