// const { ethers } = require("ethers");

// After looking into pinging smart contracts, I was going to setup
//hardhat here to create the json being referenced but I figured that was overkill for this demo.
//Still, I left the work i did towards that for review.

/*
const realEstateArtifact = require("../contracts/RealEstate.json"); // non-functional artifact for demo
const escrowArtifact = require("../contracts/Escrow.json"); // non-functional artifact for demo
const counterArtifact = require("../contracts/Counter.json"); // non-functional artifact for demo

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

const realEstate = new ethers.Contract(
    process.env.REAL_ESTATE_ADDRESS,
    realEstateArtifact.abi,
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
*/

  

// Normally, I would want every contract to have its own service file. 
// However, since most of the functions will be stubs for this demo, 
// I will just have one service file with a few of the simpiler functions filled in and the rest as stubs. 


//blockchain service
async function config() {
  //would only function if the contracts were deployed
  const [nftAddress, seller, inspector, lender] = await Promise.all([
    escrow.nftAddress(),
    escrow.seller(),
    escrow.inspector(),
    escrow.lender(),
  ]);

  return {
    realEstateAddress: process.env.REAL_ESTATE_ADDRESS,
    escrowAddress: process.env.ESCROW_ADDRESS,
    nftAddress, // should match REAL_ESTATE_ADDRESS from env if deployed correctly
    seller,
    inspector,
    lender,
  };
}

async function getTokenId(/* tokenId */) {
  // Stub: read-only — call realEstate.tokenURI(tokenId); 
  // Return { tokenId, tokenURI, metadata? }.
  return {}
}



//escrow service
async function depositEarnest(/* nftID, valueWei */) {
  // Stub: payable write — needs client signer / MetaMask (msg.value + nftID), not a provider-only call.
  // Real flow: validate nftID + value >= escrowAmount(nftID), return unsigned tx { to, data, value } or send via signer.
}

async function list(/* nftID, buyer, purchasePrice, escrowAmount */) {
  // Stub: write — onlySeller; NFT must be approved for escrow first. Real flow: return unsigned tx or send via seller signer.
}

async function finalizeSale(/* nftID */) {
  // -> Require inspection status (add more items here, like appraisal)
  // -> Require sale to be authorized
  // -> Require funds to be correct amount
  // -> Transfer NFT to buyer
  // -> Transfer Funds to Seller

  // Real flow: return unsigned tx or send via signer. (Route name: finalizeTransaction)
}

//real estate service
async function getTotalSupply() {
  //would only function if the contracts were deployed
    return await realEstate.totalSupply().toString();
}

async function mint(/* tokenURI */) {
  // Stub: write — needs signer (minter). Real flow: encode/send realEstate.mint(tokenURI), return tx hash / new tokenId from receipt.
}

//counter service
//here for completeness


module.exports = {
  config,
  getTokenId,
  getTotalSupply,
  mint,
  depositEarnest,
  list,
  finalizeSale,
  // ...
};
