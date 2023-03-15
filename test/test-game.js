const { expect } = require("chai");
const hre = require("hardhat");

describe("Result of game", function () {
  it("Try testing for input 0", async function () {
  
    const Game = await hre.ethers.getContractFactory("Game");
    const game = await Game.deploy();

    expect(await game.gameResults(0)).to.emit(false);
  });
});