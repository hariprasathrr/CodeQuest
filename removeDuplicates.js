function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(
  removeDuplicates([
    ,
    "1",
    "1",
    "2",
    "3",
    "duplicate",
    "duplicate",
    "remove",
    "runjs",
    "runfile",
    "hello",
  ])
);
