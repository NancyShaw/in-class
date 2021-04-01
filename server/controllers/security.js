
module.exports.LoginRequired = (req, res, next)=> {
    if(req.user) {
        next();
    } else {
        next({ code:403, msg: "Access denied" })
    }
}