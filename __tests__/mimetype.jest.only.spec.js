const { extractMimeType } = require("../src/index.js");

test("check if an image mimetype", () => {
  expect(extractMimeType("https//somedomin/somepath/resource.jpg")).toEqual(
    "image/jpg"
  );

  expect(extractMimeType("https://somedomain/somepath/resource.png")).toEqual(
    "image/png"
  );

  expect(extractMimeType("https://somedomain/somepath/resource.gif")).toEqual(
    "image/gif"
  );
});

test("check if default return is html", () => {
  expect(extractMimeType("somemalformedurl")).toEqual("text/html");
});

test("check if returns json ", () => {
  expect(extractMimeType("https://somedomain/somepath/resource.json")).toEqual(
    "application/json"
  );
});

test("check if returns font type", () => {
  expect(extractMimeType("https://somedomain/somepath/resource.woff")).toEqual(
    "font/woff"
  );
});
