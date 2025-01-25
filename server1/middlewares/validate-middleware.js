const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body); // Use Zod to parse and validate the request body
    next();
  } catch (error) {
    const status = 422;
    const message = "Validation Error";
    const extraDetails = error.errors.map(err => err.message); // Extract detailed error messages from Zod

    const responseError = {
      status,
      message,
      extraDetails,
    };

    console.log(responseError);
    res.status(status).json(responseError); // Respond with validation errors
  }
};

module.exports = validate;
