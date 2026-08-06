const asyncErrorHandler = require("../../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../../utils/errorHandler");

//general blockchain endpoints
//specifc contract endpoints are handled in their respective controllers

exports.config = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

exports.getTokenId = asyncErrorHandler(async (req, res, next) => {

    res.status(200).json({message: ""})
});

/*
general endpoints:
config() - grab adresses from contracts
getTokenId() - /nft/:tokenId => get token URI

*/