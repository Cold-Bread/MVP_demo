const express = require("express");
const {
    config,
    getTokenId
  } = require("../../controllers/blockchain/blockchainController");

const router = express.Router();

router.route("/config").post(config);
router.route("/nft/:tokenId").post(getTokenId);


module.exports = router;
