const Manager = require("../models/employeeModels");

test("getRole() should be correct position", () => {
    const testRole = "Manager";
    const newManager = new Manager("Ashley", 1, 1, "ashley@company.com");
    expect(newManager.getRole() == testRole);
  });