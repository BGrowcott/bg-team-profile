const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Employee Class", () => {
  const manager = new Manager("Bert Bondie", 2, "bert@bondie.com", 5);

  describe("GetName function", () => {
    it("Returns the Manager name", () => {
      expect(manager.getName()).toBe("Bert Bondie");
    });
  });

  describe("GetId function", () => {
    it("Returns the manager ID", () => {
      expect(manager.getId()).toBe(2);
    });
  });

  describe("GetEmail function", () => {
    it("Returns the manager Email", () => {
      expect(manager.getEmail()).toBe("bert@bondie.com");
    });
  });

  describe("GetRole function", () => {
    it("Returns the manager Role", () => {
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
