import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Script from 'next/script'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import ShopByConcern from '../components/ShopByConcern'
import TopSellingProducts from '../components/TopSellingProducts'
import QualityIngredients from '../components/QualityIngredients'
import WhyUs from '../components/WhyUs'
import Feedback from '../components/Feedback'
import HowItWorks from '../components/HowItWorks'
import RecentBlogs from '@/components/RecentBlogs'
import InstagramFollow from '@/components/InstagramFollow'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import CookieConsent from 'react-cookie-consent'

const bugherdUrl = 'https://www.bugherd.com/sidebarv2.js?apikey=' + process.env.NEXT_PUBLIC_BUGHERD_KEY

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>VitalPawz</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </Head>
      <Navbar/>
      <Search/>
      <HeroSection/>
      <Features/>
      <ShopByConcern/>
      <TopSellingProducts/>
      <QualityIngredients/>
      <WhyUs/>
      <Feedback/>
      <HowItWorks/>
      <RecentBlogs/>
      <InstagramFollow/>
      <Footer/>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

      {process.env.NEXT_PUBLIC_BUGHERD_KEY &&
      <Script src={bugherdUrl}/>
      }
    </div>
  )
}
