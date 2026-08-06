const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const { ethers } = require("ethers");

const realEstateArtifact = require("../contracts/RealEstate.json");
const escrowArtifact = require("../contracts/Escrow.json");
const counterArtifact = require("../contracts/Counter.json");

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

//Id use hardhat here to create the json being referenced but I figured that was overkill for this demo.
const realEstate = new ethers.Contract(
    process.env.REAL_ESTATE_ADDRESS,
    RealEstateArtifact.abi,
    provider
  );

  const escrow = new ethers.Contract(
    process.env.ESCROW_ADDRESS,
    escrowArtifact.abi,
    provider
  );

  const counter = new ethers.Contract(
    process.env.COUNTER_ADDRESS,
    counterArtifact.abi,
    provider
  );

// Normally, I would want every contract to have its own service file. 
// However, since most of the functions will be stubs for this demo, 
// I will just have one service file with a few of the more important functions filled in and the rest as stubs. 


//blockchain service
exports.config = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({success: true});
});


//escrow service
exports.depositEarnest = asyncErrorHandler(async (req, res, next) => {
    // Stub: real flow would validate body, then either
    // return unsigned tx data for MetaMask or call service with server signer
    res.status(501).json({ success: false, message: "Not implemented — client-signed tx flow" });
  });

//real estate service
async function getTotalSupply() {
    return await realEstate.totalSupply().toString();
}

//counter service