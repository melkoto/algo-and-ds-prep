// Find closest to the target
interface IRecord {
  arr: number[];
  mid: number;
  result: number | null;
  target: number;
}

const bsFindClosestToTarget = (
  arr: number[],
  target: number
): number | null => {
  let start = 0,
    end = arr.length - 1,
    mid: number,
    result: number | null = null;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    result = record({ arr, mid, result, target });

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return result;
};

const record = (params: IRecord): number => {
  let { arr, mid, result, target } = params;
  if (result === null) {
    result = mid;
  } else if (difference(arr[mid], target) < difference(arr[result], target)) {
    result = mid;
  }
  return result;
};

const difference = (midNumber: number, target: number): number => {
  return Math.abs(midNumber - target);
};

bsFindClosestToTarget([10, 20, 30, 40, 50], 23);
bsFindClosestToTarget([10, 20, 30, 40, 50], 27);
bsFindClosestToTarget([10, 20, 30, 40, 50], 41);
bsFindClosestToTarget([10, 20, 30, 40, 50], 55);
