const { body, validationResult } = require('express-validator')
const contactValidationRules = () => {
  return [
    body('firstname').isString().not().isEmpty(),
    body('lastname').isString().not().isEmpty(),
    body('email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    body('idnumber').isLength({ min: 4 })
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  contactValidationRules,
  validate,
}
