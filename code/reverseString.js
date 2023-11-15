function reverseString(string) {
  const reverseArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string.split("")[i]);
  }
  return reverseArray.join("");
}

module.exports = reverseString;
