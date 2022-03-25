import styles from '../../../styles/product/YouLikeSection.module.css'
import Image from 'next/image'

const items = [
  { img: '/img/HomePage/item2.png', title: 'Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews', text: 'Small/Medium (5-35 lbs), 9 mg, 30 Soft Baked Chews', price: '24.34' },
  { img: '/img/HomePage/item3.png', title: 'CBD Wellness Chicken And Blueberry Flavor Soft Baked Chews', text: 'Small/Medium (5-35 lbs), 9 mg, 30 Soft Baked Chews', price: '25.56' },
  { img: '/img/HomePage/item4.png', title: ' Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews', text: 'Small/Medium (5-35 lbs), 9 mg, 30 Soft Baked Chews', price: '23.25' },
  { img: '/img/HomePage/item1.png', title: ' Martha Stewart CBD Calm Chicken and Cranberry Flavor Soft Baked Chews', text: 'Small/Medium (5-35 lbs), 9 mg, 30 Soft Baked Chews', price: '23.53' },
]

export default function YouLikeSection() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
          You may also like
        </div>
        <div className={styles.body}>
          { items.map( (item, i) => (
            <div key={item.title} className={styles.item}>
              <img src={item.img} className={styles.item_img} />
              <div className={styles.item_title}>
                {item.title}
              </div>
              <div className={styles.item_text}>
                {item.text}
              </div>
              <div className={styles.addCart_field}>
                <div className={styles.price}>${item.price}</div>
                <button className={styles.addcart}>Add to Cart</button>
              </div>
              { i == 1 ? 
                <div>
                  <div className={styles.popular}>Popular</div>
                  {/* <div className={styles.popular_after}></div> */}
                </div> : "" }
            </div>
          ) ) }
        </div>
    </div>
  )
}