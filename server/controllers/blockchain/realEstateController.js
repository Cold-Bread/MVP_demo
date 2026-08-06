const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const blockchainService = require("../../services/blockchainService");

exports.mint = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({success: false, /* ...await blockchainService.mint() */})
});

exports.getTotalSupply = asyncErrorHandler(async (req, res, next) => {
    const supply = await blockchainService.getTotalSupply();
res.status(200).json({ success: true, totalSupply: supply});
});

