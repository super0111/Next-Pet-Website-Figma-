import heroBg from 'public/img/hero-section/hero-bg@2x.webp';
import styles from '../styles/HeroSection.module.css'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <Image
        layout="fill"
        className="object-top object-cover pointer-events-none bg-purple"
        priority
        src={heroBg}/>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Find your pet’s perfect
          product match.
        </h1>
        <p className={styles.description}>
          Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby cries as if in dire pain.
        </p>
        <button className={styles.cta}>Shop Now</button>
        <span className="relative inline-block md:ml-16">
          <button className={styles.alt}>Customized Recommendation</button>
        </span>
      </div>
    </div>
  )
}