/*
DESCRIPTION:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

#FUNDAMENTALS #STRINGS
*/

function correct(str) {
  return str.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
}

// Part #2
function correct(str) {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === '0') {
      strArr[i] = 'O';
    } else if (strArr[i] === '1') {
      strArr[i] = 'I';
    } else if (strArr[i] === '5') {
      strArr[i] = 'S';
    }
  }
  return strArr.join('');
}
