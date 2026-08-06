const { ethers } = require("ethers");

const realEstateContract = require("../contracts/RealEstate.json");
const escrowContract = require("../contracts/Escrow.json");
const counterContract = require("../contracts/Counter.json");

// Normally, I would have every contract would have its own service file. 
// Since most of the functions will be stubs, 
// I will just have one service file with a few of the more important functions either as stubs or real functions.. 

async function getTotalSupply() {
    //validate contract adress

    const totalSupply = await realEstateContract.totalSupply();
    return totalSupply;
}