import PropTypes from 'prop-types'
import classNames from './TextInput.module.scss'

function TextInput({ className, ...rest }) {
  return (
    <input {...rest} className={`${classNames['text-input']} ${className}`} />
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
}

TextInput.defaultProps = {
  className: '',
}

export default TextInput
