/*
for the distribution,
we need to calculate each of the sum of valueA and valueB.
how many times the sum is occurring...
example: sum of 7 can be obtained in multiple ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) ==> 6 ways
*/

const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

function displayCombinations(dieA, dieB) {
  let distribution = {};

  for (let valueA of dieA) {
    for (let valueB of dieB) {
      const sum = valueA + valueB;

      distribution[sum] = (distribution[sum] || 0) + 1;
    }
  }

  return distribution;
}

const distribution = displayCombinations(dieA, dieB);

console.log("Distribution of Combinations:");
for (let sum in distribution) {
  console.log(`Sum ${sum}: ${distribution[sum]} occurrences`);
}
