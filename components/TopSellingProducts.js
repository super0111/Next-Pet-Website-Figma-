import styles from '../styles/TopSellingProducts.module.css'
import productOne from 'public/img/products/product-1@2x.webp'
import productTwo from 'public/img/products/product-2@2x.webp'
import productThree from 'public/img/products/product-3@2x.webp'
import Image from 'next/image'

export default function TopSellingProducts() {
  return (
    <div className={styles.wrapper}>

      <h2 className={styles.heading}>Top Selling Products</h2>
      <p className={styles.description}>
        Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby cries as if in dire pain.
      </p>
      <div className={styles.products}>


        <div className={styles.product}>
          <div className={styles.image}>
            <Image src={productOne}/>
          </div>
          <span className={styles.price}>$25.56</span>
          <h4 className={styles.title}>
            Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews
          </h4>
          <p className={styles.productDescription}>
            Small/Medium (5-35 lbs),
            9 mg, 30 Soft Baked Chews
          </p>
          <button className={styles.addToCart}>
            Add to cart
          </button>
        </div>
        <div className={styles.product}>
          <div className={styles.image}>
            <Image src={productTwo}/>
          </div>
          <span className={styles.price}>$25.56</span>
          <h4 className={styles.title}>
            Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews
          </h4>
          <p className={styles.productDescription}>
            Small/Medium (5-35 lbs),
            9 mg, 30 Soft Baked Chews
          </p>
          <button className={styles.addToCart}>
            Add to cart
          </button>
        </div>

        <div className={styles.product}>
          <div className={styles.image}>
            <Image src={productOne}/>
          </div>
          <span className={styles.price}>$25.56</span>
          <h4 className={styles.title}>
            Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews
          </h4>
          <p className={styles.productDescription}>
            Small/Medium (5-35 lbs),
            9 mg, 30 Soft Baked Chews
          </p>
          <button className={styles.addToCart}>
            Add to cart
          </button>
        </div>


        <div className={styles.product}>
          <div className={styles.image}>
            <Image src={productThree}/>
          </div>
          <span className={styles.price}>$25.56</span>
          <h4 className={styles.title}>
            Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews
          </h4>
          <p className={styles.productDescription}>
            Small/Medium (5-35 lbs),
            9 mg, 30 Soft Baked Chews
          </p>
          <button className={styles.addToCart}>
            Add to cart
          </button>
        </div>


      </div>
    </div>
  )
}