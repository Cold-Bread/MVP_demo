const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");

exports.depositEarnest = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.list = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.approveSale = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.cancelSale = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.updateInspectionStatus = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});
