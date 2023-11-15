let reverseString = require("../code/reverseString");

test("A single word", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("A sentence", () => {
  expect(reverseString("the main")).toBe("niam eht");
});

test("A single letter", () => {
  expect(reverseString("b")).toBe("b");
});

test("Empty", () => {
  expect(reverseString("")).toMatch(/^$/);
});
