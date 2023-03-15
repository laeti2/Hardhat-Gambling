const { expect } = require("chai");
const hre = require("hardhat");

describe("Engine test", function () {
  it("Testing engine function with two parameters", async function () {

    const Engine = await hre.ethers.getContractFactory("Engine");
    const engine = await Engine.deploy();

    expect(await engine.bitwiseOp(1, 1)).to.equal(1);
    expect(await engine.bitwiseOp(3, 0)).to.equal(3);
    expect(await engine.bitwiseOp(0, 0)).to.equal(0);
  });
});