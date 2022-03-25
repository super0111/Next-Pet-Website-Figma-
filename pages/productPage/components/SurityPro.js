import styles from '../../../styles/product/SurityPro.module.css'
import Image from 'next/image'
import canopy from '../../../public/img/HomePage/bitmap.png'
import facebookIcon from '../../../public/img/HomePage/045-facebook.png'
import tweetIcon from '../../../public/img/HomePage/013-twitter-1.png'
import pinIcon from '../../../public/img/HomePage/026-pinterest.png'
import { BiMinus, BiPlus } from "react-icons/bi";

const imgs = [
  { id: 0,url: '/img/HomePage/rectangle.png' },
  { id: 1, url: '/img/HomePage/rectangle-copy-4.png' },
  { id: 2, url: '/img/HomePage/rectangle-copy-5.png' },
  { id: 3, url: '/img/HomePage/rectangle-copy-7.png' },
]
const descriptions = [
  { id: 0, price: 7.9, text: "Tailored CBD for your dog with the gourmet flavors of fresh chicken and real cranberries in a unique soft baked chew. A perfect recipe combining the highest-quality CBD from hemp extract to help dogs cope with everyday stress.", comment: "Free Shipping on orders above $20", review: 42 },
  { id: 1, price: 8.4, text: "Most Popular CBD for your dog with the gourmet flavors of fresh chicken and real cranberries in a unique soft baked chew. A perfect recipe combining the highest-quality CBD from hemp extract to help dogs cope with everyday stress.", comment: "Your Shipping on orders above $30", review: 34 },
  { id: 2, price: 7.6, text: "Popular CBD for your dog with the gourmet flavors of fresh chicken and real cranberries in a unique soft baked chew. A perfect recipe combining the highest-quality CBD from hemp extract to help dogs cope with everyday stress.", comment: "Our Shipping on orders above $25", review: 12 },
  { id: 3, price: 9.2, text: "My CBD for your dog with the gourmet flavors of fresh chicken and real cranberries in a unique soft baked chew. A perfect recipe combining the highest-quality CBD from hemp extract to help dogs cope with everyday stress.", comment: "Cost Shipping on orders above $40", review: 53 },
]

import ReviewIcon from '../../../public/img/HomePage/path.png'
import { useState } from 'react'


export default function SurityPro() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.urlText}>Home  /  Vitamins & Supplements /  SurityPro Active Smoky Bacon Flavor Soft Chews</span>
      <div className={styles.body}>
        <h4 className={styles.title}>SurityPro Active Smoky Bacon Flavor Soft Chews</h4>
        <div className={styles.brand}>
          <div className={styles.brand_body}>
            <span>
              <span className={styles.boldText}>Brand</span>
              <span className=''>:Canopy animal health </span>
            </span>
            <Image src={canopy} className={styles.bigImg} />
          </div>
          <div className={styles.social_field}>
            <span className={styles.alignCenter}>
              <Image src={facebookIcon} width={16} height={16} />
              <span className={styles.marginLetf}>share</span>
            </span>
            <span className={styles.alignCenter}>
              <Image src={tweetIcon} />
              <span className={styles.marginLetf}>Tweet</span>
            </span>
            <span className={styles.alignCenter}>
              <Image src={pinIcon} width={16} height={16} />
              <span className={styles.marginLetf}>Pin It</span>
            </span>
          </div>
        </div>
        <MainBody />
      </div>
    </div>
  )
}

function MainBody() {
  const [ imgState, setImg ] = useState(0);

  return (
    <div className={`${styles.flexRow} ${styles.mt_32} ${styles.flexWrap}`}>
      <div className={`${styles.width55} ${styles.surity_imgField}`}>
        <div className={styles.MenuSection}>
          { imgs.map( (img, i) => (
            <div className={ imgState== i ? styles.active_border_img : styles.border_img } key={i} onClick={()=> setImg(i)}>
              <img className={styles.menuImg} src={img.url} />
            </div>
          )) }
        </div>
        { imgs.map( (img, i) => (
          <div className={styles.width} key={i}>
            { imgState == img.id ? 
              <div className={styles.ImgSection}>
                <img className={styles.bigImg_item} src={img.url}/>
              </div>
              : ""
            }
          </div>
        ) )}
      </div>
      <div className={styles.DecSection}>
        <Description imgState = {imgState} />
      </div>
    </div>
  )
}

function Description(props) {
  const imgState = props.imgState;
  const [ countState, setCount ] = useState(1);
  const [ packState, setPack ] = useState(1);
  const [ buyOptionState, setBuyOption ] = useState(1);
  const decrease = () => {
    countState = Math.max(1, countState - 1);
    setCount(countState);
  }
  const increase = () => {
    countState = countState + 1;
    setCount(countState);
  }

  return (
    <>
      { descriptions.map( (description, i) =>
        <div key={i}>
          { imgState == description.id ?
            <div className={styles.flexCol}>
            <div className={styles.price_review}>
              <div className={styles.flexCol}>
                <div className={styles.mainPrice}>
                  <div className={styles.mainPrice}>$ {description.price}</div>
                  { i == 1 ? <div className={styles.mainPrice_off}>$12.00</div> : ""}
                  { i == 1 ? <div className={styles.percent_off}>20% OFF</div> : ""}
                </div>
                <div className={styles.reviewDec_text}>{description.comment}</div>  
              </div>
              <div className={styles.review_field}>
                <div className={styles.review}>
                  {[...Array(5)].map((x, i) =>
                  <div key={i} className={styles.reviewImg}>
                    <Image src={ReviewIcon} width={22} height={22} key={i} />
                  </div>
                  )}
                </div>
                <div className={styles.reviewDec_count}>{description.review} reviews</div>
              </div>
            </div>
            <div className={styles.prodectDec}>
              {description.text}
            </div>
            <div className={styles.packSize}>
              Pack Size
            </div>
            <div className={styles.packField}>
              <div onClick={ () => setPack(1) } className={ packState == 1 ? `${styles.pack_active_border} ${styles.width50}` : `${styles.pack_border} ${styles.width50}` }>
                <span className={ packState == 1 ? styles.active_smallFont : styles.smallFont }>Medium (26-50 lbs), 28 mg, 30 Soft Chews</span>
              </div>
              <div onClick={ () => setPack(2) } className={ packState == 2 ? `${styles.pack_active_border} ${styles.width50}` : `${styles.pack_border} ${styles.width50}` }>
                <span className={ packState == 2 ? styles.active_smallFont : styles.smallFont }>Large (36-110 lbs), 26 mg, 7 Soft Baked Chews</span>
              </div>
            </div>
            <div className={styles.packSize}>
              Buy Option
            </div>
            <div className={styles.buySection}>
              <div onClick={ () => setBuyOption(1) } className={ buyOptionState == 1 ? `${styles.buy_left_border} ${styles.width40} ${styles.active_border}` : `${styles.buy_left_border} ${styles.width40}` }>
                <span className={styles.price}>$7.29</span> <br></br>
                <span className={styles.smallFont}>One-time purchase</span>
              </div>
              <div onClick={ () => setBuyOption(2) } className={ buyOptionState == 2 ? `${styles.buy_right_border} ${styles.width60} ${styles.active_border}` : `${styles.buy_right_border} ${styles.width60}` }>
                <span><sapn className={styles.price}>$6.10</sapn><span className={styles.smallFont}>Subscribe and </span><span className={styles.redFont}>Save 10%</span></span>
                <br />
                <span className={styles.smallFont}>Deliver every 
                  <select className={styles.select} name="format" id="format">
                    <option value="1">1 months</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="4">4 months</option>
                    <option value="5">5 months</option>
                </select>
                </span>
              </div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.addCart_count}>
                  <div onClick={ decrease} className={ countState == 1 ? styles.dis_minus : styles.act_minus }>
                    <BiMinus />
                  </div>
                  <div className={styles.addCart_count_num}>{countState}</div>
                  <div onClick={increase} className={styles.plus}>
                    <BiPlus />
                  </div>
              </div>
              <button className={styles.addCartField}>
                  Add to cart $ 6.89
              </button>
            </div>
            <div className={styles.social_field2}>
              <span className={styles.alignCenter}>
                <Image src={facebookIcon} width={16} height={16} />
                <span className={styles.marginLeft}>share</span>
              </span>
              <span className={styles.alignCenter}>
                <Image src={tweetIcon} />
                <span className={styles.marginLeft}>Tweet</span>
              </span>
              <span className={styles.alignCenter}>
                <Image src={pinIcon} width={16} height={16} />
                <span className={styles.marginLeft}>Pin It</span>
              </span>
            </div>
            <div className={styles.border}></div>
          </div>
          : ""
          }
        </div>
      ) }
    </>
  )
}