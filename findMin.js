function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const leftVal = nums[left];
    const midVal = nums[mid];
    const rightOfMid = nums[mid + 1];

    if (midVal > rightOfMid) {
      return rightOfMid;
    } else if (midVal < leftVal) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}

module.exports = findMin;
