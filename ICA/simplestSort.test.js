const arr = [];
const simpleSort = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

test("a random array", () => {
  expect(simpleSort([3, 2, 5, 4, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("a singleton", () => {
  expect(simpleSort([7])).toEqual([7]);
});

test("a singleton", () => {
  expect(simpleSort([-1, -2])).toEqual([-2, -1]);
});

test("a singleton", () => {
  expect(simpleSort([])).toEqual([]);
});


