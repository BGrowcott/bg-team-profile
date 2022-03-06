const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  const intern = new Intern("Bert Bondie", 2, "bert@bondie.com", 'Bondie Academy');

  describe("GetName function", () => {
    it("Returns the intern name", () => {
      expect(intern.getName()).toBe("Bert Bondie");
    });
  });

  describe("GetId function", () => {
    it("Returns the intern ID", () => {
      expect(intern.getId()).toBe(2);
    });
  });

  describe("GetEmail function", () => {
    it("Returns the intern Email", () => {
      expect(intern.getEmail()).toBe("bert@bondie.com");
    });
  });

  describe("GetSchool function", () => {
    it("Returns the intern School", () => {
      expect(intern.getSchool()).toBe("Bondie Academy");
    });
  });

  describe("GetRole function", () => {
    it("Returns the intern Role", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });
});