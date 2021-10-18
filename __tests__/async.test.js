let returnGreeting = require("../src/async");

test("async greeting", async () => {
  let greeting = await returnGreeting();

  expect(greeting).toEqual("hello");
});
