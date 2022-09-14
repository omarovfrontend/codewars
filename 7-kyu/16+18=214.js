/*
DESCRIPTION:
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16 + 18 = 2 14
26 + 39 = 5 15
122 + 81 = 1 10 3
 
#ALGORITHMS #MATHEMATICS
*/

function add(num1, num2) {
  num1 = num1.toString().split('').reverse();
  num2 = num2.toString().split('').reverse();
  let max = Math.max( num1.length, num2.length );
  let arr = [];
  
  for (let i = max; i >= 0; i -= 1) {
    arr.push((+num1[i] || 0) + (+num2[i] || 0));
  }
  let res = arr.reduce((el, acc) => el.toString() + acc.toString());
  return +res;
}
