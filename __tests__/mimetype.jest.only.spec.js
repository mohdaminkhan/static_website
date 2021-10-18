const { extractMimeType } = require("../src/index.js");

test("check if an image mimetype", () => {
  let url = "https://somedomain/somepath/";

  expect(extractMimeType(url + "resource.jpg")).toBe("image/jpg");

  expect(extractMimeType(url + "resource.png")).toBe("image/png");

  expect(extractMimeType(url + "resource.gif")).toBe("image/gif");
});

test("check if default return is html", () => {
  expect(extractMimeType("somemalformedurl")).toBe("text/html");
});

test("check if returns json ", () => {
  let url = "https://somedomain/somepath/"
  expect(extractMimeType(url + "resource.json")).toBe("application/json");
});

test("check if returns font type", () => {
  expect(extractMimeType("https://somedomain/somepath/resource.woff")).toBe(
    "font/woff"
  );
});
