// Dutch national flag problem

const dutchFlag = (arr: number[], pivot: number): void => {
  let leftBoundary = 0;
  let rightBoundary = arr.length - 1;
  let i = 0;

  while (i <= rightBoundary) {
    if (arr[i] < pivot) {
      swap(arr, arr[i], arr[leftBoundary]);
      leftBoundary++;
      i++;
    } else if (arr[i] > pivot) {
      swap(arr, arr[i], arr[rightBoundary]);
      rightBoundary--;
    } else {
      i++;
    }
  }
  console.log(arr);
}

function swap(arr, first, second) {
  let temp = arr[second];
  arr[second] = arr[first];
  arr[first] = temp;
}

dutchFlag([1,6,7,2,3,4,4,4,1,3,5,6,8], 4);
