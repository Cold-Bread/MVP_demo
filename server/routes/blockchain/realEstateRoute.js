const express = require("express");

const {
    mint,
    totalSupply,
  } = require("../../controllers/blockchain/realEstateController");

const router = express.Router();
  
router.route("/mint").post(mint);
router.route("/totalsupply").post(totalSupply);

module.exports = router;

  
/*
list of endpoints for realEstate contract:
mint()
totalSupply()
*/
