const Manager = require("../lib/Manager");

est("Recieve Manager's Name", () => {
    const name = "Daniel";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("Recieve an ID different than void", () => {
    const id = "123";
    const e = new Manager(id);
    expect(e.id).toBe(id);
});