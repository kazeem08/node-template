/**
 * An express Middleware that attaches two new functions for responding with error/success messages
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  res.successResponse = (({
    code = 200, message = 'success', response, data, headers = {},
  }) => {
    Object.entries(headers).forEach(([field, value]) => {
      res.set(field, value);
    });
    res.status(code).send({
      response,
      data,
      status: true,
      message,
    });
  });

  res.errorResponse = (({
    code = 500, message = 'error', response, headers = {},
  }) => {
    Object.entries(headers).forEach(([field, value]) => {
      res.set(field, value);
    });
    res.status(code).send({
      response,
      status: false,
      message,
    });
  });

  next();
};