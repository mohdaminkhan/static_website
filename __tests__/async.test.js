let returnGreeting = require("../src/async");

let editGreeting = require("../src/async/promise");

test("async greeting", async () => {
  let greeting = await returnGreeting();

  expect(greeting).toEqual("hello");
});
test("edit greeting", (done) => {
  editGreeting("booyakah", 200).then((res) => {
    try {
      expect(res).toEqual("booyakah");
      done();
    } catch {
      throw new Error("OH OHHH!!");
    }
  });
});
