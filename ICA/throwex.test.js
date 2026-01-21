function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is bad news dude.");
  }
  return a / b;
}

test("throw an error on devision by zero", () => {
  expect(() => {
    divide(10, 0);
  }).toThrow("Division by zero is bad news dude.");
});
