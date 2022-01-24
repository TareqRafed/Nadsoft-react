import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

function I18nProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default I18nProvider

I18nProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
