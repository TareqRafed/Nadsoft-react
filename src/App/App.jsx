import { RouterProvider } from '@/Routes'
import { I18nProvider } from '@/services/i18n'

function App() {
  return (
    <I18nProvider>
      <RouterProvider />
    </I18nProvider>
  )
}

export default App
