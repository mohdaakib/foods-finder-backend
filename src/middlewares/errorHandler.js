import logger from '../utils/logger.js';

const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error('Unhandled Error', {
    message: err.message,
    stack: err.stack,
    method: req.method,
    path: req.path
  });

  // Respond with error
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
};

export default errorHandler;