class AppError extends Error {
  constructor(message, statusCode) {
    //NOTE: super needed because we extend a parent class, and message is passed inside the parent class
    super(message);

    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
