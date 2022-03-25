import styles from 'styles/Footer.module.css'
import visa from 'public/img/footer/visa.svg'
import mastercard from 'public/img/footer/mastercard.svg'
import americanExpress from 'public/img/footer/american-express.svg'
import discover from 'public/img/footer/discover.svg'
import sezzle from 'public/img/footer/sezzle.svg'
import arrow from 'public/img/footer/arrow.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">
        <p className={styles.disclaimer}>
        <span className="font-bold">Disclaimer</span>: These statements have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Information contained or made available through the VitalPawz website is not intended to constitute or substitute for legal advice or veterinary advice. Read our policy on blogs and reviews.
        </p>

        <div className={styles.links}>
          <div className="mb-5 sm:w-1/4 sm:px-2">
            <h4 className="font-bold text-center sm:text-left mb-5">
              About
            </h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Sell with us</a></li>
            </ul>
          </div>
          <div className="mb-5 sm:w-1/4 sm:px-2">
            <h4 className="font-bold text-center sm:text-left mb-5">
              Terms & Conditions
            </h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
          <div className="mb-5 sm:w-1/4 sm:px-2">
            <h4 className="font-bold text-center sm:text-left mb-5">
              Help
            </h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="sm:w-2/4">
            <div className={styles.subscribe}>
              <h4 className="font-bold text-center sm:text-left">
                Subscribe to our newsletter
              </h4>
              <h4 className="text-center mb-4 sm:text-left">
                Get discounts and deals
              </h4>
              <form className="align-middle text-center flex flex-nowrap justify-center sm:justify-start sm:text-left">
                <input type="email" placeholder="Enter Email Address"/>
                <button type="submit">
                  <Image src={arrow} width={16} height={16}/>
                </button>
              </form>

              <div className={styles.payments}>
                <h6 className="text-center md:text-left">Payment Accepted</h6>
                <div className={styles.paymentIcons}>
                  <div>
                    <Image src={visa}
                           width={73}
                           height={23}/>
                  </div>
                  <div>
                    <Image src={mastercard}
                           width={59}
                           height={36}/>
                  </div>
                  <div>
                    <Image src={americanExpress}
                           width={36}
                           height={36}/>
                  </div>
                  <div>
                    <Image src={discover}
                           width={61}
                           height={40}/>
                  </div>
                  <div>
                    <Image src={sezzle}
                           width={88}
                           height={21}/>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/*<div className={styles.payments}>*/}
        {/*  <h6 className="text-center">Payment Accepted</h6>*/}
        {/*  <div className={styles.paymentIcons}>*/}
        {/*    <div>*/}
        {/*      <Image src={visa}*/}
        {/*             width={73}*/}
        {/*             height={23}/>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <Image src={mastercard}*/}
        {/*             width={59}*/}
        {/*             height={36}/>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <Image src={americanExpress}*/}
        {/*             width={36}*/}
        {/*             height={36}/>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <Image src={discover}*/}
        {/*             width={61}*/}
        {/*             height={40}/>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <Image src={sezzle}*/}
        {/*             width={88}*/}
        {/*             height={21}/>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className={styles.copyright}>
          <hr className="mb-5"/>
          Copyright © 2021-2029 Pet Supply.
          All rights reserved.
        </div>
      </div>
    </div>
  )
}