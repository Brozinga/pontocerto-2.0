module.exports = (app) => {
    //ROUTE NOT FOUND
    app.use(function (req, res, next) {
        res.status(501).json({ status: 501, error: true, message: "Method not implemented" });
    });
}