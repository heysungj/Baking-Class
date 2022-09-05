const getProductNameById = require("./src/utilities/getProduct");

test("find product by id", () => {
  expect(getProductNameById("62dea81bb0912c750546749a")).toBe(
    "Orange Pound Cake"
  );
});
