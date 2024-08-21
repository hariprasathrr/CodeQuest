function formatPhoneNumber(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}

module.exports = formatPhoneNumber;
