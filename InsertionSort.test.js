const { insertionSort } = require("./InsertionSort.js");

describe("insertionSortAlternativeImplementation", () => {
  it("expects to work with empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });

  it("expects to return input array when array.length is less than 2", () => {
    const input = [3];
    expect(insertionSort(input)).toEqual(input);
  });

  it("expects to return array sorted in ascending order", () => {
    expect(insertionSort([14, 11])).toEqual([11, 14]);
    expect(insertionSort([21, 22, 23])).toEqual([21, 22, 23]);
    expect(insertionSort([1, 3, 2, 3, 7, 2])).toEqual([1, 2, 2, 3, 3, 7]);
    expect(insertionSort([1, 6, 4, 5, 9, 2])).toEqual([1, 2, 4, 5, 6, 9]);
  });
});
