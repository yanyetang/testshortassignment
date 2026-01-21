const people = [{ age: 55 }, "Dean", "Fleur", "Lia", "Sophie"];

test("should be an instance of Array", () => {
  expect(people).toBeInstanceOf(Array);
});

test("first item of people should have property called age", () => {
  expect(people[0]).toHaveProperty("age", 55);
});
