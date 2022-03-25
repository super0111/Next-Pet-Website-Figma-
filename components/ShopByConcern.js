import styles from '../styles/ShopByConcern.module.css'
import Image from 'next/image'
import calmIcon from '../public/img/shop-by-concern/calm.svg'
import immunityIcon from '../public/img/shop-by-concern/immunity.svg'
import mobilityIcon from '../public/img/shop-by-concern/mobility.svg'
import petsIcon from '../public/img/shop-by-concern/pets.svg'
import reliefIcon from '../public/img/shop-by-concern/relief.svg'
import wellnessIcon from '../public/img/shop-by-concern/wellness.svg'

export default function ShopByConcern() {
  return (
    <div className="container mx-auto lg:px-1">
      <div className={styles.wrapper}>
        <div className="md:flex md:justify-center md:flex-col md:w-1/4">
          <h2 className={styles.heading}>Shop by Concern</h2>
          <p className={styles.description}>
            The only cold pressed dog food made using fresh ingredients.
          </p>
        </div>
        <div className={styles.features}>
          <div>
            <Image src={calmIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Calm
            </p>
          </div>
          <div>
            <Image src={immunityIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Immunity
            </p>
          </div>
          <div>
            <Image src={mobilityIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Mobility
            </p>
          </div>
          <div>
            <Image src={reliefIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Relief
            </p>
          </div>
          <div>
            <Image src={petsIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Skin & Coat
            </p>
          </div>
          <div>
            <Image src={wellnessIcon}
                   className={styles.icon}
            />
            <p className={styles.iconDescription}>
              Wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}