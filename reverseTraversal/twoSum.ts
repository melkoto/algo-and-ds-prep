// Given an integer array, find 2 numbers that sum to a target

// O(n) time complexity, O(n) space complexity
// const twoSum = (arr: number[], target: number): [number, number] => {
//   let store: {[key: string]: number} = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     let currNumber = arr[i];
//     let diffrence = target - currNumber;
//
//     if (currNumber in store) {
//       return [store[currNumber], i];
//     }
//
//     store[diffrence] = i;
//   }
//
//   return [null, null];
// }

// O(n) time complexity, O(1) space compexity
const twoSum = (arr: number[], target: number): [number, number] => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let start = arr[leftPointer];
    let end = arr[rightPointer];

    if (start + end > target) {
      rightPointer--;
    } else if (start + end < target) {
      leftPointer++
    } else {
      return [leftPointer, rightPointer];
    }
  }
  return [null, null];
}


console.log(twoSum([1,2,4,5,6], 8))
console.log(twoSum([1,2,4,5,6], 9))
