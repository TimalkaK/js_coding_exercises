import {
  areWeCovered
} from "../challenges/exercise006";

describe("areWeCovered", () => {
  test("returns true if 3 staff members are available per day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Bertha", rota: ["Monday", "Tuesday", "Thursday", "Friday"] },
      { name: "Jake", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
      { name: "Chanel", rota: ["Friday", "Saturday", "Sunday"] },
      { name: "Troy", rota: ["Wednesday", "Sunday"] }
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });

  test("if 3 staff are not available, returns false", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Bertha", rota: ["Monday", "Tuesday", "Thursday", "Friday"] },
      { name: "Jake", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
      { name: "Chanel", rota: ["Friday", "Saturday", "Sunday"] },
      { name: "Troy", rota: ["Wednesday", "Sunday"] }
    ];
    expect(areWeCovered(staff, "Saturday")).toBe(false);
  });
});