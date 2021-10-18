//first file

// write a function to test

function extractMimeType(url) {
  let imageTypes = ["jpg", "png", "gif"];
  let fontTypes = ["woff", "otf", "ttf"];

  if (typeof url !== "string") {
    throw new Error("not a url");
  }
  let segments = url.split("/");
  segments = segments.filter((segment) => segment !== "/");
  let format = segments.pop();
  if (format.indexOf(".") !== -1) {
    let extension = format.slice(format.indexOf(".") + 1);
    if (imageTypes.includes(extension)) return `image/${extension}`;
    else if (fontTypes.includes(extension)) return `font/${extension}`;
    else if (extension === "json") return "application/json";
  }
  return "text/html";
}

module.exports = { extractMimeType };
