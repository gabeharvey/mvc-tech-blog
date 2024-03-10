// This Function Validates if User Status is Logged In
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {
        next();
    }
};

// This Exports withAuth Function
module.exports = withAuth;