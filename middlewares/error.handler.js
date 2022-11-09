const { ValidationError } = require("sequelize");

function logErrors(err, req, res, next) {
  next(err);
}

function errorHandler(err, req, res) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function formatHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    const { details } = err;
    const message = details.map((i) => i.message).join(",");
    return res.status(400).json({ message });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, formatHandler };
