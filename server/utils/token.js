const jwt = require("jsonwebtoken");

const encryptionKey = "secret";

exports.JWT_token_encrypted = (object_to_enrypt, expiresIn) => {
  return jwt.sign(
    { ...object_to_enrypt },
    encryptionKey,
    expiresIn && { expiresIn }
  );
};

exports.JWT_token_decrypted = (token_to_decrypt) => {
  let error;
  return jwt.verify(token_to_decrypt, encryptionKey, (err, decrypted) => {
    if (err) error = "Invalid token! Access is forbidden.";
    return { error, decrypted };
  });
};
