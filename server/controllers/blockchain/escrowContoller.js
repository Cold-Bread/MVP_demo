const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const blockchainService = require("../../services/blockchainService");

exports.depositEarnest = asyncErrorHandler(async (req, res, next) => {
    res.status(501).json({ success: false, /* ...await blockchainService.depositEarnest() */ });
});

exports.list = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({success: false, /* ...await blockchainService.list() */})
});

exports.approveSale = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({success: false, /* ...await blockchainService.approveSale() */})
});

exports.cancelSale = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({success: false, /* ...await blockchainService.cancelSale() */})
});

exports.updateInspectionStatus = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({success: false, /* ...await blockchainService.updateInspectionStatus() */})
});

exports.finalizeTransaction = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({success: false, /* ...await blockchainService.finalizeTransaction() */})
});
