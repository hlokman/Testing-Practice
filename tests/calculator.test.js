const calculator = require("../code/calculator");

test("Add", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("Substract", () => {
  expect(calculator.substract(7, 4)).toEqual(3);
});

test("Multiply", () => {
  expect(calculator.multiply(7, 4)).toEqual(28);
});

test("Divide", () => {
  expect(calculator.divide(36, 6)).toEqual(6);
});

test("Add empty", () => {
  expect(calculator.add()).toEqual(NaN);
});

test("Substract empty", () => {
  expect(calculator.substract()).toEqual(NaN);
});

test("Divide empty", () => {
  expect(calculator.divide()).toEqual(NaN);
});
