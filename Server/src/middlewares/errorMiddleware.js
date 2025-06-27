const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
  
    const status = err.status || 500;
    const extraDetails = err.extraDetails || "Error from backend";
  
    res.status(status).json({
      message: err.message || "Something went wrong",
      extraDetails,
    });
  };
  
  export default errorMiddleware;
  