function countOccurrences(str, char) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences("HellLo World", "W"));
