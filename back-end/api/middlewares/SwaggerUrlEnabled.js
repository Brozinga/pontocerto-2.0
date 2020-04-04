module.exports = (app) => {

    const version = process.env.VERSION;

    app.get(`/`, (req, res, next) => {
        return process.env.NODE_ENV === "development"
            ? res.redirect(`${version}/api-docs`)
            : res.json({ status: 200, error: false, message: "API is Running!" });
    });
}