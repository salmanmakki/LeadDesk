const jwt = require('jsonwebtoken');
const config = require('../config');
const AppError = require('../utils/AppError');

const auth = (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    return next(new AppError('Not authenticated. Please log in.', 401));
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.userId = decoded.id;
    next();
  } catch {
    return next(new AppError('Invalid or expired token.', 401));
  }
};

module.exports = auth;