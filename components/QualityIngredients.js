import styles from 'styles/QualityIngridients.module.css'
import qualityIngredients from 'public/img/quality-ingredients/quality-ingredients@2x.webp'
import topLeft from 'public/img/quality-ingredients/top-left.svg'
import topRight from 'public/img/quality-ingredients/top-right.svg'
import middleLeft from 'public/img/quality-ingredients/middle-left.svg'
import middleRight from 'public/img/quality-ingredients/middle-right.svg'
import bottomLeft from 'public/img/quality-ingredients/bottom-left.svg'
import bottomRight from 'public/img/quality-ingredients/bottom-right.svg'
import Image from 'next/image'

export default function QualityIngredients() {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <h2 className={styles.sectionHeading}>
          Quality Ingredients
        </h2>
        <p className="text-darker-gray max-w-2xl mx-auto mb-10">
          Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby
          cries as if in dire pain.
        </p>
        <div className={styles.features}>
          <div className="xl:w-1/3 xl:text-right xl:justify-between xl:flex xl:flex-col">
            <div>
              <h3 className={styles.heading}>
                Organic Hemp Oil
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
            <div>
              <h3 className={styles.heading}>
                Vitamin C
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
            <div>
              <h3 className={styles.heading}>
                Omega-9 Fatty Acids
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
          </div>

          <div className="hidden px-16 xl:flex xl:w-1/2 items-center content-center">
            <div className={styles.imageWrapper}>
              <span className={styles.topLeft}><Image src={topLeft}/></span>
              <span className={styles.topRight}><Image src={topRight}/></span>
              <span className={styles.middleLeft}><Image src={middleLeft}/></span>
              <span className={styles.middleRight}><Image src={middleRight}/></span>
              <span className={styles.bottomLeft}><Image src={bottomLeft}/></span>
              <span className={styles.bottomRight}><Image src={bottomRight}/></span>
              <Image src={qualityIngredients}/>
            </div>
          </div>

          <div className="xl:w-1/3 xl:text-left xl:justify-between xl:flex xl:flex-col">
            <div>
              <h3 className={styles.heading}>
                Organic Hemp Oil
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
            <div>
              <h3 className={styles.heading}>
                Vitamin C
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
            <div>
              <h3 className={styles.heading}>
                Omega-9 Fatty Acids
              </h3>
              <p className={styles.paragraph}>
                The only cold pressed dog food made using fresh ingredients.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}