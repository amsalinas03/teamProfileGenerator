//import the employee class
const Employee = require("../models/employeeModels");

test("Can create a new employee", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee).toBe("object"));
});
test("getName() works properly", () => {
    const nameTest = "Ashley";
    const newEmployee = new Employee(nameTest);
    expect(newEmployee.getName()).toBe(nameTest);
});
test("getId() works properly", () => {
    const idTest = 1;
    const newEmployee = new Employee("Ashley", idTest);
    expect(newEmployee.getId()).toBe(idTest);
  });
  test("getRole() works properly", () => {
    const roleTest = "Employee";
    const newEmployee = new Employee("Ashley");
    expect(newEmployee.getRole()).toBe(roleTest);
  });