// Find first occurrence of target

const bsFirstOccurrence = (arr: number[], target: number): number | null => {
  let start = 0,
    end = arr.length,
    mid: number,
    currentNum: number,
    prevNumber: number;

  while (start <= end) {
    mid = Math.floor(start + end / 2);
    currentNum = arr[mid];
    prevNumber = arr[mid - 1];

    if (
      currentNum > target ||
      (currentNum === target && currentNum > 0 && prevNumber === target)
    ) {
      end = mid - 1;
    } else if (currentNum < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return null;
};

bsFirstOccurrence([1, 2, 2, 3, 4, 4, 4, 7, 10], 4);
