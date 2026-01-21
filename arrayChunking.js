const chunkArray = (array, size) => {
  let resultArray = [];
  for (let i = 0; i < array.length; i += size) {
    resultArray.push(array.slice(i, i + size));
  }
  return resultArray;
};

const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);

test("chunk arry", () => {
  expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});
