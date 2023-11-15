function caesarCipher(string) {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyza  AbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZa";
  const alphabetArray = alphabet.split("");
  const array = [];

  string.split("").forEach((item) => {
    if (!alphabetArray.includes(item)) {
      array.push(item);
    } else {
      array.push(alphabetArray[alphabetArray.indexOf(item) + 1]);
    }
  });

  return array.join("");
}

module.exports = caesarCipher;
