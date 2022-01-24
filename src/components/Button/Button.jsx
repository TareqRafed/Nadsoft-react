import PropTypes from 'prop-types'
import classNames from './Button.module.scss'

function Button({ className, ...rest }) {
  return (
    <button
      type="button"
      className={`${classNames.button} ${className}`}
      {...rest}
    >
      Test
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
}

Button.defaultProps = {
  className: '',
}

export default Button
