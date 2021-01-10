const jwt = require("jsonwebtoken");

module.exports = {
  validateToken,
  generateToken,
};

function generateToken(user) {
  const payload = {
    id: user.id,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(403).json({ message: "You shall not pass" });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "You Forgont Your Token...go get it." });
  }
}
