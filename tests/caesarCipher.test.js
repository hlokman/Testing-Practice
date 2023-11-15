const caesarCipher = require("../code/caesarCipher");

test("Alphabet in order", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("A single letter (1)", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("A single letter (2)", () => {
  expect(caesarCipher("p")).toBe("q");
});

test("Keeps the punctuations", () => {
  expect(caesarCipher("&&abcdefghijk??lmnopqrstuvwxyz!!")).toBe(
    "&&bcdefghijkl??mnopqrstuvwxyza!!"
  );
});

test("Keeps the spaces between the words", () => {
  expect(caesarCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("Keeps the numbers", () => {
  expect(caesarCipher("attack on mars 2098")).toBe("buubdl po nbst 2098");
});
