class Calculator {
  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}
let calculator = new Calculator();

module.exports = calculator;
