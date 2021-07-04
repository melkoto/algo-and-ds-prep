// Move all zeroes to the beginning of an array

// O(n) - time complexity, O(1) - space complexity
const zerosToBeginning = (arr: number[]): void => {
  let boundary = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[boundary];

    if (arr[i] === 0) {
      arr[boundary] = arr[i];
      arr[i] = temp;
      boundary++;
    }
  }
  console.log(arr);
}

zerosToBeginning([0,2,1,0,3,3,0])
