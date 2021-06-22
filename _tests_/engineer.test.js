const Engineer = require("../models/employeeModels");

test("getRole() should be correct position", () => {
    const testRole = "Engineer";
    const newEngineer = new Engineer("Ashley", 1, "ashley@company.com", "amsalinas03");
    expect(newEngineer.getRole() == testRole);
  });