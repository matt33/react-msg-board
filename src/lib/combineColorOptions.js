import Immutable from 'seamless-immutable'

export default function combineColorOptions(options, placeholder) {
  /* eslint-disable prefer-const */
  let colorOptions = Immutable.asMutable(options)
  /* eslint-enable prefer-const */
  colorOptions.unshift(placeholder)
  return colorOptions
}
