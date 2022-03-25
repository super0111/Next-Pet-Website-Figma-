import styles from '../styles/WhyUs.module.css'
import madeInUsa from 'public/img/why-us/made-in-usa.svg'
import naturalIngredients from 'public/img/why-us/natural-ingredients.svg'
import rewards from 'public/img/why-us/rewards.svg'
import fastShipping from 'public/img/why-us/fast-shipping.svg'
import autoshipDiscounts from 'public/img/why-us/autoship-discounts.svg'
import secure from 'public/img/why-us/secure.svg'
import Image from 'next/image'

export default function WhyUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.whyUsImage}>
      </div>
      <div className="pt-10 pb-6 mx-auto xl:w-3/5 lg:ml-auto lg:pt-20 lg:pl-20 lg:pb-16">
        <h2 className={styles.heading}>
          Why buy from us
        </h2>
        <p className={styles.description}>
          Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby
          cries as if in dire pain.
        </p>
        <div className={styles.features}>

          <div className={styles.feature}>
            <div>
              <Image src={madeInUsa}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Made in USA
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>

          <div className={styles.feature}>
            <div>
              <Image src={naturalIngredients}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Natural Ingredients
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>

          <div className={styles.feature}>
            <div>
              <Image src={rewards}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Rewards
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>

          <div className={styles.feature}>
            <div>
              <Image src={fastShipping}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Fast Shipping
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>

          <div className={styles.feature}>
            <div>
              <Image src={autoshipDiscounts}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Autoship Discounts
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>

          <div className={styles.feature}>
            <div>
              <Image src={secure}
                     width={34}
                     height={34}/>
            </div>
            <h3 className={styles.featureTitle}>
              Secure
            </h3>
            <p className={styles.featureDescription}>
              The UK’s best selling grain free ancestral diet. A top seller for good reason.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}