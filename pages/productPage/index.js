import styles from '../../styles/product/Home.module.css'
import SurityPro from './components/SurityPro'
import Description from './components/Description'
import IconSection from './components/IconSection'
import ReviewSection from './components/ReviewSection'
import YouLikeSection from './components/YouLikeSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CookieConsent from 'react-cookie-consent'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar/>
      <SurityPro />
      <Description />
      <IconSection />
      <ReviewSection />
      <YouLikeSection />
      <Footer/>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  )
}
