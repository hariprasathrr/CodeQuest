const validateEmail = require("./validate-email");

const result1 = validateEmail("brad@gmail.com");
const result2 = validateEmail("bradgmail.com");

console.log(result1);
console.log(result2);
