const { JWT_token_decrypted } = require("./token");

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

  const { error, decrypted } = JWT_token_decrypted(token);
  if (error) return res.status(403).json({ error });

  req.id = decrypted._id;
  next();
};
