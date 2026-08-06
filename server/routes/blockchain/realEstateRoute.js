const express = require("express");

const {
    mint,
    totalSupply,
  } = require("../../controllers/blockchain/realEstateController");

const router = express.Router();
  
router.route("/realestate/mint").post(mint);
router.route("/realestate/totalsupply").post(totalSupply);

module.exports = router;

  
/*
list of endpoints for realEstate contract:
mint()
totalSupply()
*/
