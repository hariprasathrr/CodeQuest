function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
