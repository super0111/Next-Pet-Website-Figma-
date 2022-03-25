import styles from '../styles/Features.module.css'
import Image from 'next/image'
import fastShippingIcon from '../public/img/features/fast-shipping.svg'
import naturalIngredientsIcon from '../public/img/features/natural-ingredients.svg'
import securePaymentsIcon from '../public/img/features/secure-payments.svg'
import madeInUsaIcon from 'public/img/features/made-in-usa.svg'

export default function Features() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.features}>

        <div className={styles.feature}>
          <Image src={fastShippingIcon}
                 height={25}
                 width={25}
                 className={styles.icon}
          />
          <p className={styles.description}>
            Fast shipping
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={securePaymentsIcon}
                 height={25}
                 width={25}
                 className={styles.icon}
          />
          <p className={styles.description}>
            Secure payments
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={naturalIngredientsIcon}
                 height={25}
                 width={25}
                 className={styles.icon}
          />
          <p className={styles.description}>
            Natural ingredients
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={madeInUsaIcon}
                 width={25}
                 height={25}
                 className={styles.icon}
                 />
          <p className={styles.description}>
            Made in USA
          </p>
        </div>

      </div>
    </div>
  )
}