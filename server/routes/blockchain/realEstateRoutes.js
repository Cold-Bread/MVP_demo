const express = require("express");

const router = express.Router();
const {
    mint,
    totalSupply,
  } = require("../../controllers/blockchain/realEstateController");
  
  //realEstate
  router.route("/realestate/mint").post(mint);
  router.route("/realestate/totalsupply").post(totalSupply);

  module.exports = router;

  
/*
list of endpoints for realEstate contract:
mint()
totalSupply()
*/
