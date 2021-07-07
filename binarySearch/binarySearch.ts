const binarySearch = (arr: number[], target: number): number => {
  let start = 0,
    end = arr.length;

  while (start <= end) {
    let mid = Math.floor(start + end / 2);

    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else return mid;
  }
  return null;
};

binarySearch([1, 2, 3, 4, 7, 10], 2);
