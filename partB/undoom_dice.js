//step 1 : calculate original probability distribution for the sums (2 to 12) based on the initial dice configuration.

function calculateOriginalProbabilities() {
  const Die_A = [1, 2, 3, 4, 5, 6];
  const Die_B = [1, 2, 3, 4, 5, 6];
  const sumProbabilities = {};

  for (let i = 0; i < Die_A.length; i++) {
    for (let j = 0; j < Die_B.length; j++) {
      const sum = Die_A[i] + Die_B[j];
      sumProbabilities[sum] = (sumProbabilities[sum] || 0) + 1;
    }
  }

  const totalCombinations = Die_A.length * Die_B.length;

  for (const key in sumProbabilities) {
    sumProbabilities[key] = sumProbabilities[key] / totalCombinations;
  }

  return sumProbabilities;
}

const originalProbabilities = calculateOriginalProbabilities();
// console.log("Original Probabilities:", originalProbabilities);

// step 2 : we need to maintain the original probability distribution for the sums while reattaching spots to Die A.
//we need to calculate the number of spots needed on the new face to maintain the original probability
//face of die_A should not have more than 4 spots

function adjust_Die_A(originalProbabilities) {
  const Die_A = [1, 2, 3, 4, 5, 6];
  const New_Die_A = [];

  for (let i = 0; i < Die_A.length; i++) {
    const currentFace = Die_A[i];

    const originalProbability = Die_A.reduce((sum, face) => {
      return sum + originalProbabilities[currentFace + face];
    }, 0);
    const newSpots = Math.ceil(originalProbability * 6);

    const adjustedSpots = Math.min(newSpots, 4);

    New_Die_A.push(adjustedSpots);
  }

  return New_Die_A;
}

const adjusted_Die_A = adjust_Die_A(originalProbabilities);
// console.log("Adjusted Die A:", adjusted_Die_A);

//step 3 : now we nwwd to calculate the original probability for each face of Die B based on the adjusted faces of Die A.
// then we need to adjust the faces of Die B to complement the changes made to Die A while maintaining the original probability distribution for the sums.

function adjust_Die_B(originalProbabilities, adjusted_Die_A) {
  const Die_B = [1, 2, 3, 4, 5, 6];
  const New_Die_B = [];

  for (let i = 0; i < Die_B.length; i++) {
    const originalProbability = Die_B.reduce((sum, face) => {
      return sum + originalProbabilities[adjusted_Die_A[0] + face];
    }, 0);

    const newSpots = Math.ceil(originalProbability * 6);

    New_Die_B.push(newSpots);
  }

  return New_Die_B;
}

const adjusted_Die_B = adjust_Die_B(originalProbabilities, adjusted_Die_A);
console.log("Adjusted Die B:", adjusted_Die_B);
