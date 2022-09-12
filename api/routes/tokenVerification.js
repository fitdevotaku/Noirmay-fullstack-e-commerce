const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
  const authenticationHeader = req.headers.token;
  if (authenticationHeader) {
    const token = authenticationHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("No authentication!");
  }
};

const tokenVerificationAndAuthorization = (req, res, next) => {
  tokenVerification(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed!");
    }
  });
};

const tokenVerificationAndAdmin = (req, res, next) => {
  tokenVerification(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed!");
    }
  });
};

module.exports = {
  tokenVerification,
  tokenVerificationAndAuthorization,
  tokenVerificationAndAdmin,
};
