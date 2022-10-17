/*
DESCRIPTION:
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

#DEBUGGING
*/

const greet_abe = function() {
  const name = 'Abe';
  return "Hello, " + name + '!';
};

const greet_ben = function() {
  const name = 'Ben';
  return "Hello, " + name + '!';
};
