class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message); // call super class and send message to there!
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
