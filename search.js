function findMinIdx(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) {
    return 0; // Only one element
  }

  // If the array is not rotated
  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0; // Minimum is at the start
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if mid is the minimum
    if (mid > 0 && rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
      return mid;
    }
    if (
      mid < rotatedSortedArr.length - 1 &&
      rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]
    ) {
      return mid + 1;
    }

    // Decide which side to continue searching on
    if (rotatedSortedArr[mid] >= rotatedSortedArr[left]) {
      left = mid + 1; // Move right
    } else {
      right = mid - 1; // Move left
    }
  }

  return -1; // Should not reach here for a proper rotated sorted array
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target not found
}

function search(nums, target) {
  // Handle empty array case
  if (nums.length === 0) {
    return -1;
  }

  const minIdx = findMinIdx(nums);

  // Search in the left half from the start to minIdx - 1
  const leftSearch = binarySearch(nums, target, 0, minIdx - 1);
  if (leftSearch !== -1) {
    return leftSearch; // Target found in left side
  }

  // Search in the right half from minIdx to the end of the array
  return binarySearch(nums, target, minIdx, nums.length - 1);
}

module.exports = search;
