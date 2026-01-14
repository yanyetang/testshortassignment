function climbStairs(n) {
  if (n <= 2) return n;
  let current;
  let pre1 = 1;
  let pre2 = 2;
  for (let i = 3; i <= n; i++) {
    current = pre1 + pre2;
    pre1 = pre2;
    pre2 = current;
  }
  return current;
}

test("climb", () => {
  expect(climbStairs(15)).toBe(987);
});
