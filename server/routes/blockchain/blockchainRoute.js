const express = require("express");
const {
    config,
  } = require("../../controllers/blockchain/blockchainController");

const router = express.Router();

router.route("/config").post(config);
router.route("/nft/:tokenId").post(getTokenId);


module.exports = router;
