const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../../utils/errorHandler");
const realEstateContract = require("../../services/blockchainService.js");

exports.mint = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.totalSupply = asyncErrorHandler(async (req, res, next) => {
    const supply = await realEstateContract.totalSupply();
    res.status(200).json({ success: true, totalSupply: supply});
});

