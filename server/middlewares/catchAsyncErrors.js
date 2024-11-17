import ErrorHandler from './errorMiddleware.js'
export const catchAsyncErrors = (func) => (req, res, next) => {
Promise.resolve(func(req, res, next)).catch((error) => {
  console.log('I am reached in catchAsyncErrors.js')
    if (error.name === "ValidationError") {
      next(new ErrorHandler(Object.values(error.errors).map(e => e.message).join(", "), 400));
    } else {
      console.log('I am not a validation error and I am in catchAsyncErrors.js',error.message)
      next(error);
    }
  });
};
