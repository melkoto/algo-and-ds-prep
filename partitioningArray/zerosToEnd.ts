// Move all zeroes to the end of an array

// O(n) - time complexity, O(1) - space complexity
const zerosToEnd = (arr: number[]): void => {
  let boundary = arr.length - 1;

  for (let i = boundary; i >= 0; i--) {
    let temp = arr[boundary];

    if (arr[i] === 0) {
      arr[boundary] = arr[i];
      arr[i] = temp;
      boundary--;
    }
  }
  console.log(arr);
}

zerosToEnd([0,2,1,0,3,3,0])
