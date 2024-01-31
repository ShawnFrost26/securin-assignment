function possibleSumProbability(dieA, dieB) {
  let probabilities = {};

  for (let valueA of dieA) {
    for (let valueB of dieB) {
      const sum = valueA + valueB;

      probabilities[sum] =
        (probabilities[sum] || 0) + 1 / (dieA.length * dieB.length);
    }
  }
}
