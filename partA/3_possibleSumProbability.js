/*
for calculating the probabilty a sum, we need to divide the count of occurrences for each sum by the total number of combinations.
*/

const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

function possibleSumProbability(dieA, dieB) {
  let probabilities = {};

  for (let valueA of dieA) {
    for (let valueB of dieB) {
      const sum = valueA + valueB;

      probabilities[sum] =
        (probabilities[sum] || 0) + 1 / (dieA.length * dieB.length);
    }
  }

  return probabilities;
}

const probabilities = possibleSumProbability(dieA, dieB);

console.log("Probabilities of Combinations:");
for (let sum in probabilities) {
  console.log(`P(Sum = ${sum}) = ${probabilities[sum]}`);
}
