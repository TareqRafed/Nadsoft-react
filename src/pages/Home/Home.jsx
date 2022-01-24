import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Home() {
  const { t } = useTranslation()
  return (
    <div>
      this is home {t('hi')} <Link to="/next">go to next page</Link>
    </div>
  )
}

export default Home
