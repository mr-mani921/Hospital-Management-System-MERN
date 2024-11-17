class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyvalues)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "JsonWebTokenError") {
    const message = "Json Web Token Invalid , Try again";
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "TokenExpiredError") {
    const message = "Json Web Token Is Expired, Try again";
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "Cast Error") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // this checks that is there more than one error then it format there messages and if there is just one then it returns its message directly
  errMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => {
          error.message;
        })
        .join(" ")
    : err.message;
  return res.status(err.statusCode).json({
    success: false,
    message: errMessage,
  });
};
export default ErrorHandler;
