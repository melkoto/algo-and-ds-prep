// Find the subarray with the maximum sum

const maxSubarray = (numbers: number[]): number => {
  let max = numbers[0];
  let maxEndingCurrentI = numbers[0];

  for (let number of numbers) {
    maxEndingCurrentI = Math.max(number, maxEndingCurrentI + number);
    max = Math.max(max, maxEndingCurrentI);
  }
  return max;
}

maxSubarray([-2,-3,4,-1,-2,1,5,-1]);
