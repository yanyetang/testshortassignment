const thing = { name: "John" };

const users = [thing, { name: "Fleur" }];

function lazy_function() {}

test("expect old lazy to return undefined", () => {
  expect(lazy_function()).toBeUndefined();
});

test("expect old lazy to return undefined", () => {
  expect(lazy_function).not.toBeUndefined();
});

test("that the length of the user array is 2 ", () => {
  expect(users).toHaveLength(2);
});

test("that the user John is in user collection", () => {
  expect(users).toContainEqual({ name: "John" });
});

test("that the user John is in user collection", () => {
  expect(users).toContain(thing);
});
