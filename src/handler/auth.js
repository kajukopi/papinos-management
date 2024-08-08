const ROLE_LEVELS = {
  isAdmin: 1,
  isStaff: 2,
  isUser: 3,
  isNew: 4,
}

function handleAuthentication(requiredLevel) {
  return function (req, res, next) {
    next()
    // if (!req.session || !req.session.level) {
    //   return res.redirect("/login")
    // }

    // const userLevel = Object.keys(ROLE_LEVELS).find((role) => req.session[role]) || 0

    // // Allow access if requiredLevel is undefined or if the user's level meets or exceeds the required level
    // if (requiredLevel === undefined || userLevel <= requiredLevel) {
    //   return next()
    // }

    // // Redirect if the user's level is higher than the required level
    // return res.redirect("/dashboard")
  }
}

module.exports = {handleAuthentication}
