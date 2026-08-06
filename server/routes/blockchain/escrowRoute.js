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
router.route("/depositEarnest").post(depositEarnest);
router.route("/list").post(list);
router.route("/approveSale").post(approveSale);
router.route("/updateInspectionStatus").post(updateInspectionStatus);
router.route("/cancelSale").post(cancelSale);
router.route("/finalizeTransaction").post(finalizeTransaction);

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