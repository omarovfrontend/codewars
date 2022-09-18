/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

If you liked this Kata there is another related one here

#FUNDAMENTALS
*/

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  
  switch (humanYears) {
    case 1:
      catYears = 15;
      dogYears = 15;
      break;
    case 2:
      catYears = 15 + 9;
      dogYears = 15 + 9;
      break;
    default:
      catYears = 4 * humanYears + 16;
      dogYears = 5 * humanYears + 14;
      break;
  }
  return [humanYears, catYears, dogYears];
}

// Part #2
const humanYearsCatYearsDogYears = humanYears => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i += 1) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
