const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const blockchainService = require("../../services/blockchainService");


//general blockchain endpoints
//specifc contract endpoints are handled in their respective controllers

exports.config = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({ success: true, ...await blockchainService.config() })
});

exports.getTokenId = asyncErrorHandler(async (req, res, next) => {
    res.status(200).json({ success: true, ...await blockchainService.getTokenId() })
});
