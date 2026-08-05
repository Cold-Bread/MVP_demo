const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");

exports.openConnection = asyncErrorHandler(async (req, res, next) => {
    

    res.status(200).json({message: "connection opened"})
});

exports.closeConnection = asyncErrorHandler(async (req, res, next) => {


    res.status(200).json({message: "connection closed"})
});