/*
DESCRIPTION:
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

#FUNDAMENTALS
*/

function remove (string) {
  const strArr = string.split('');
  const res = strArr[strArr.length - 1] === '!' ? strArr.slice(0, -1) : strArr;
  return res.join('');
}
