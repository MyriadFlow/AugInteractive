const { expect } = require("chai");
const { assert } = require("hardhat");

const {BN, constants, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const { soliditySha3 } = require("web3-utils");

const AugInteractive = artifacts.require("AugInteractive");

let accounts;
let augInteractive;
let owner;

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("AugInteractive Contract", function () {

	before(async function() {
		accounts = await web3.eth.getAccounts();
		owner = accounts[0];
		augInteractive = await AugInteractive.new("AugInteractive", "AIE", 137);
	});
	
	it("Should return the right name and symbol of the token once AugInteractive is deployed", async function() {
		assert.equal(await augInteractive.name(), "AugInteractive");
		assert.equal(await augInteractive.symbol(), "AIE");
	});
  
});