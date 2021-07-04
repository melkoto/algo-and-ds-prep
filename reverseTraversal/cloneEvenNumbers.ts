// Given an array of numbers, replace each even number with 2 of the same

const cloneEvenNumbers = (arr: number[]): void => {
  let start = -1;
  let end = arr.length;

  arr.forEach(number => {
    if (number > - 1) start++
  })

  for (let i = start; i >= 0; i--) {
    let currNumber = arr[i];
    if (currNumber % 2 === 0) {
      arr[--end] = currNumber;
      arr[--end] = currNumber;
    } else {
      arr[--end] = currNumber;
    }
  }
  console.log(arr);
}

cloneEvenNumbers([2,4,1,0,3,-1,-1,-1]);
cloneEvenNumbers([2,2,2,-1,-1,-1])
cloneEvenNumbers([2,-1])
cloneEvenNumbers([])
cloneEvenNumbers([3])
