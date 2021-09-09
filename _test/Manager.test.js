const Manager = require("../lib/Manager");

test("Recieve Manager's Name", () => {
    const expectedValue = "Daniel";
    const e = new Manager("Daniel", 2, "daniel@gmail.com", 1234567892);
    expect(e.getName()).toBe(expectedValue);
});

test("Recieve Manager's ID", () => {
    const expectedValue = 2;
    const e = new Manager("Daniel", 2, "daniel@gmail.com", 1234567892);
    expect(e.getId()).toBe(expectedValue);
});