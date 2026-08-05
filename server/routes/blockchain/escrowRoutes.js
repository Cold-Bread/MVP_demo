const express = require("express");
const {
  depositEarnest,
  list,
  approveSale,
  updateInspectionStatus,
  cancelSale, 
  finalizeTransaction,
  } = require("../../controllers/blockchain/escrowContoller");

const router = express.Router();
//escrow
router.route("/escrow/depositEarnest").post(depositEarnest);
router.route("/escrow/list").post(list);
router.route("/escrow/approveSale").post(approveSale);
router.route("/escrow/updateInspectionStatus").post(updateInspectionStatus);
router.route("/escrow/cancelSale").post(cancelSale(inspectionStatus));
router.route("/escrow/finalizeTransaction").post(finalizeTransaction(inspectionStatus));

module.exports = router;



/*
list of endpoints for escrow contract:
//buyer
depositEarnest()
approveSale()

//seller
list()
approveSale()

//inspector
updateInspectionStatus()


//helper
cancelSale(inspectionStatus)
finalizeTransaction(inspectionStatus)

*/