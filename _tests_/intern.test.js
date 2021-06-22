const Intern = require("../models/employeeModels");

test("getSchool() functions properly", () => {
    const testSchool = "UT";
    const newIntern = new Intern("Ashley", 1, "ashley@company.com", testSchool);
    expect(newIntern.getSchool() == testSchool);
  });