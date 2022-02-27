const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  const employee = new Employee("Bert Bondie", 2, "bert@bondie.com");

  describe("GetName function", () => {
    it("Returns the Employee name", () => {
      expect(employee.getName()).toBe("Bert Bondie");
    });
  });

  describe("GetId function", () => {
    it("Returns the Employee ID", () => {
      expect(employee.getId()).toBe(2);
    });
  });

  describe("GetEmail function", () => {
    it("Returns the Employee Email", () => {
      expect(employee.getEmail()).toBe("bert@bondie.com");
    });
  });

  describe("GetRole function", () => {
    it("Returns the Employee Role", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });

});
