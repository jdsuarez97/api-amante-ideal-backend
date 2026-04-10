function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateCreateAmante(req, res, next) {
  const { nombre, edad, intereses } = req.body;
  const errors = {};

  if (!isNonEmptyString(nombre)) {
    errors.nombre = "nombre is required and must be a non-empty string";
  }

  if (!Number.isInteger(edad) || edad < 18) {
    errors.edad = "edad is required and must be an integer greater than or equal to 18";
  }

  if (!Array.isArray(intereses) || intereses.length === 0) {
    errors.intereses = "intereses is required and must be a non-empty array";
  } else {
    const invalidInterest = intereses.some(
      (interest) => !isNonEmptyString(interest)
    );

    if (invalidInterest) {
      errors.intereses = "each interest must be a non-empty string";
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: "Validation error",
      errors
    });
  }

  return next();
}

export function validateInterestQuery(req, res, next) {
  const { interes } = req.query;

  if (!isNonEmptyString(interes)) {
    return res.status(400).json({
      message: "Validation error",
      errors: {
        interes: "interes query parameter is required and must be a non-empty string"
      }
    });
  }

  return next();
}
