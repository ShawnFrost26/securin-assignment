/*
We have 6 faced dieA and dieB numbering from 1 to 6
For each face or value of dieA, dieB can have 6 values.
If dieA = 1, the combinations can be: (1,1), (1,2), (1,3), (1,4), (1,5) and (1,6) i.e 6 combinations.
So, total combinations will be 6*6 = 36
*/

const dieA = [1, 2, 3, 4, 5, 6];
const dieB = [1, 2, 3, 4, 5, 6];

function totalCombinations(dieA, dieB) {
  return dieA.length * dieB.length;
}

const ans = totalCombinations(dieA, dieB);
console.log(ans);
