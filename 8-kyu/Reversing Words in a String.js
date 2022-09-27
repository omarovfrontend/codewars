/*
DESCRIPTION:
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

Happy coding!

#FUNDAMENTALS #STRINGS
*/

function reverse(s) {
  return s.split(' ').reverse().join(' ');
}

// Part #2
const reverse = (s) => s.split(' ').reverse().join(' ');

// Part #3
function reverse(s) {
  const strArr = s.split(' ');
  const res = [];
  
  for (let i = strArr.length - 1; i >= 0; i -= 1) {
    res.push(strArr[i]);
  }
  return res.join(' ');
}
