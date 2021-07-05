// Find a subarray that sums to a Target

const subarraySumsToTarget = (arr: number[], target: number): [number, number] => {
  let p1 = 0, p2 = 0, sum = arr[0];

  while (p1 < arr.length) {
    if (p1 > p2) {
      p2 = p1;
      sum = arr[p1];
    }

    if (sum < target) {
      if (p2 === arr.length - 1) {
        break;
      }
      p2++;
      sum += arr[p2];
    } else if (sum > target) {
      sum -= arr[p1];
      p1++;
    } else {
      return [p1, p2];
    }
  }
  return [null, null];
}

subarraySumsToTarget([5,3,1,7,6,4,2,3], 14);
