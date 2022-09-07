/*
DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

don't worry about uppercase vowels
y is not considered a vowel for this kata

#STRINGS #FUNDAMENTALS
*/

function shortcut (str) {
  const strArr = str.split('');
  
  for (let i = 0; i < str.length; i += 1) {
    if(str[i] === 'a' || 
       str[i] === 'e' || 
       str[i] === 'i' || 
       str[i] === 'o' || 
       str[i] === 'u') {
      strArr[i] = '';
    }
  }
  return strArr.join('');
}
