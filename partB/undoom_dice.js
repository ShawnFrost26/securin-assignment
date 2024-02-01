//step 1 : calculate original probability distribution for the sums (2 to 12) based on the initial dice configuration.

function calculateOriginalProbabilities() {
  const die_A = [1, 2, 3, 4, 5, 6];
  const die_B = [1, 2, 3, 4, 5, 6];
  const sumProbabilities = {};

  for (let i = 0; i < die_A.length; i++) {
    for (let j = 0; j < die_B.length; j++) {
      const sum = die_A[i] + die_B[j];
      sumProbabilities[sum] = (sumProbabilities[sum] || 0) + 1;
    }
  }

  const totalCombinations = die_A.length * die_B.length;

  for (const key in sumProbabilities) {
    sumProbabilities[key] = sumProbabilities[key] / totalCombinations;
  }

  return sumProbabilities;
}

const originalProbabilities = calculateOriginalProbabilities();
console.log("Original Probabilities:", originalProbabilities);
