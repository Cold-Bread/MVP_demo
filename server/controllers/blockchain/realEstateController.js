const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../../utils/errorHandler");

exports.mint = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.totalsupply = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

