const { actionSuccess } = require("../utils")


exports.dashboard = async (req, res) => {
    return actionSuccess(res, 'Welcome to dashboard!')
}