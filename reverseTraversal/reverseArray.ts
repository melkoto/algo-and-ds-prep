// Reverse the elements of the array

const reverseArray = (arr: number[]): void => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr);
}

reverseArray([3,4,2,7,1]);
reverseArray([3,1])
