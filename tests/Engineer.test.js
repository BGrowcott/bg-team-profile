const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Employee Class", () => {
  const engineer = new Engineer("Bert Bondie", 2, "bert@bondie.com", 'github.com/BertieB');

  describe("GetName function", () => {
    it("Returns the Engineer name", () => {
      expect(engineer.getName()).toBe("Bert Bondie");
    });
  });

  describe("GetId function", () => {
    it("Returns the engineer ID", () => {
      expect(engineer.getId()).toBe(2);
    });
  });

  describe("GetEmail function", () => {
    it("Returns the engineer Email", () => {
      expect(engineer.getEmail()).toBe("bert@bondie.com");
    });
  });

  describe("GetGithub function", () => {
    it("Returns the engineer Github", () => {
      expect(engineer.getGithub()).toBe("github.com/BertieB");
    });
  });

  describe("GetRole function", () => {
    it("Returns the engineer Role", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});