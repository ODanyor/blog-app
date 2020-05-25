const { JWT_token_decoded } = require("./token");

exports.authenticated = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split("Bearer ")[1];
  } else {
    return res.status(403).json({ error: "Access forbidden" });
  }
  req.id = JWT_token_decoded(res, token)._id;
  next();
};
