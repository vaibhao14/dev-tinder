const adminAuthMiddleware = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";

  if (!isAuthorized) {
    return res.status(401).send("Unauthorized request");
  } else {
    next();
  }
}

module.exports = {
    adminAuthMiddleware
};
