/*
DESCRIPTION:
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

#FUNDAMENTALS #STRINGS
*/

function defineSuit(card) {
  const strArr = card.split('');
  
  if (strArr[1] === '♣' || strArr[2] === '♣') return 'clubs';
  else if (strArr[1] === '♠' || strArr[2] === '♠') return 'spades';
  else if (strArr[1] === '♦' || strArr[2] === '♦') return 'diamonds';
  else return 'hearts';
}

// Part #2
function defineSuit(card) {
  if (card.includes('♣')) return 'clubs';
  else if (card.includes('♦')) return 'diamonds';
  else if (card.includes('♥')) return 'hearts';
  else return 'spades';
}
