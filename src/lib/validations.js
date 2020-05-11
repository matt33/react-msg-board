const isEmpty = value => value === undefined || value === null || value === ''

function required(value) {
  if (isEmpty(value)) return 'A message is required'
  return null
}

function join(rules) {
  return (value, data) =>
    rules
      .map(rule => rule(value, data))
      .filter(error => !!error)[0]
}

function createValidator(rules) {
  return (data = {}) => {
    const errors = {}

    Object.keys(rules).forEach((key) => {
      // concat enables both functions and arrays of functions
      const rule = join([].concat(rules[key]))
      const error = rule(data[key], data)

      if (error) {
        errors[key] = error
      }
    })

    return errors
  }
}

const rules = {
  required
}

export { createValidator, rules }
