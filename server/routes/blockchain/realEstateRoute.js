const express = require("express");

const {
    mint,
    getTotalSupply,
  } = require("../../controllers/blockchain/realEstateController");

const router = express.Router();
  
router.route("/mint").post(mint);
router.route("/totalsupply").post(getTotalSupply);

module.exports = router;
