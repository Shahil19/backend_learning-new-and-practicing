module.exports = (err, req, res, next) => {
    console.log(err);

    return res.status(err?.status).json({
        success: false,
        message: err.message
    })
}