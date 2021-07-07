const binarySearch = (arr: number[], target: number): number | null => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(end + (start - end) / 2);

    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else return mid;
  }
  return null;
};

binarySearch([1, 2, 3, 4, 7, 10], 10);
