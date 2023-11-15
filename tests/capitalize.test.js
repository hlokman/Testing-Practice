let capitalize = require("../code/capitalize");

test("A single word", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("A sentence", () => {
  expect(capitalize("this is a hat")).toBe("This is a hat");
});

test("A single letter", () => {
  expect(capitalize("b")).toBe("B");
});

test("Empty", () => {
  expect(capitalize("")).toMatch(/^$/);
});
