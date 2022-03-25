import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Navbar from '@/components/Navbar';
import GenericHead from '@/components/GenericHead';
import SocialButtons from '@/components/SocialButtons';
import ReviewStars from '@/components/ReviewStars';

import canopyBrandImg from 'public/img/brands/canopy.webp';
import surityPro from 'public/img/products/surityPro@2x.webp';

import styles from 'styles/ProductEntry.module.css';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabs/Tab';
import TabPanel from '@/components/Tabs/TabPanel';

const galeryThumbs = [
  'surityPro1@2x',
  'surityPro2@2x',
  'surityPro3@2x',
  'surityPro4@2x',
  'surityPro4@2x',
  'surityPro4@2x',
];

export default function Product() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newValue) => {
    console.log('newValue', newValue);
    setActiveTab(newValue);
  };

  return (
    <div>
      <GenericHead />
      <Navbar />
      <div className={styles.root}>
        <div className={styles.breadCrumbs}>
          Home / Vitamins & Supplements / SurityPro Active Smoky Bacon Flavor
          Soft Chews
        </div>
        <h2 className={styles.title}>
          SurityPro Active Smoky Bacon Flavor Soft Chews
        </h2>

        <div className='container flex mt-3 mb-8'>
          <h3 className={styles.brandTitle}>
            <span className='font-bold'>Brand</span> : Canopy animal health
          </h3>
          <div className={styles.brandImgContainer}>
            <Image src={canopyBrandImg} height={28} width={92} />
          </div>
          <div className='flex-1 flex justify-end'>
            <SocialButtons />
          </div>
        </div>

        <div className='flex flex-row w-full'>
          <div className='flex-none'>
            <div className={styles.galeryRoot}>
              <div className={styles.galeryThumbsContainer}>
                {galeryThumbs.map((filename, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames(
                        styles.galeryThumbImageContainer,
                        index === 0 && styles.galeryThumbImageSelected
                      )}
                    >
                      <Image
                        src={require(`public/img/galery-thumbs/${filename}.webp`)}
                        height={120}
                        width={120}
                        className={styles.galeryThumbImage}
                      />
                    </div>
                  );
                })}
              </div>

              <div className={styles.galeryMain}>
                <Image src={surityPro} height={581} width={581} />
              </div>
            </div>
          </div>
          <div className={styles.productSidePanel}>
            <div className='mb-5 flex'>
              <div className='flex-1'>
                <h3 className={styles.productPriceTitle}>$ 7.29</h3>
                <p className={styles.productPriceSubTitle}>
                  Free Shipping on orders above $20
                </p>
              </div>
              <div className='mt-2'>
                <ReviewStars rating={5} subTitle='42 reviews' />
              </div>
            </div>

            <p>
              Tailored CBD for your dog with the gourmet flavors of fresh
              chicken and real cranberries in a unique soft baked chew. A
              perfect recipe combining the highest-quality CBD from hemp extract
              to help dogs cope with everyday stress.
            </p>

            <div className='mt-8'>
              <h4 className={styles.optionsTitle}>Pack Size</h4>
              <div className='mt-3 grid grid-cols-2 gap-3'>
                <div
                  className={classNames(
                    styles.optionBox,
                    styles.optionBoxSelected
                  )}
                >
                  Medium (26-50 lbs), 28 mg, 30 Soft Chews
                </div>
                <div className={styles.optionBox}>
                  Large (36-110 lbs), 26 mg, 7 Soft Baked Chews
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className={styles.optionsTitle}>Buy Option</h4>
              <div className='mt-3 grid grid-cols-2 gap-3'>
                <div className={styles.optionBox}>
                  <div className={styles.buyOptionPrice}>$7.29</div>
                  One-time purchase
                </div>
                <div
                  className={classNames(
                    styles.optionBox,
                    styles.optionBoxSelected
                  )}
                >
                  <div className={styles.buyOptionPriceSub}>$6.10</div>
                </div>
              </div>
            </div>

            <div className='mt-8 flex flex-row'>
              <div className={styles.fakeInputRoot}>1</div>
              <button className={styles.addCartBtn} type='button'>
                Add to cart $ 6.99
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-row w-full mt-16'>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab name='Description' />
            <Tab name='Ingredients' />
            <Tab name='Direction' />
          </Tabs>
        </div>

        <div className='flex flex-row w-full'>
          <TabPanel value={activeTab} index={0}>
            <>
              <div className='flex flex-row w-full mt-8'>
                <div className={styles.tabContentWideTab}>
                  <h3 className={styles.tabContentTitle}>Description</h3>
                  <p className={styles.tabContentText}>
                    26 mg of CBD from broad-spectrum hemp extract per soft chew.
                  </p>
                  <p className={styles.tabContentText}>
                    780 mg of CBD per pouch.
                  </p>
                  <p className={styles.tabContentText}>
                    Tailored CBD for your dog with the gourmet flavors of fresh
                    chicken and real cranberries in a unique soft baked chew
                    designed by Martha herself. A perfect recipe combining only
                    the highest-quality CBD from broad-spectrum hemp extract and
                    chamomile to help dogs cope with everyday stress.
                  </p>
                  <p className={styles.tabContentText}>
                    All of our ingredients are naturally derived and responsibly
                    sourced with no artificial flavors, colors, or
                    preservatives.
                  </p>
                  <p className={styles.tabContentText}>
                    Our CBD Pet Oil is formulated with your furry friends in
                    mind, using organic ingredients and our premium human grade
                    CBD. Our pet oil is crafted with Organic MCT Oil and natural
                    beef and chicken flavorings. Each bottle comes equipped with
                    a dropper applicator, allowing for flexible serving sizes
                    allowing you to easily deliver an exact amount of CBD
                    tincture to your pet’s mouth or food.
                  </p>
                  <p className={styles.tabContentText}>
                    Available in flavor choices to please even the pickiest
                    pets. Each of the three flavors also come in three different
                    strengths to fit all sizes and temperaments.
                  </p>
                </div>
                <div className={styles.productSidePanel}>
                  <h3 className={styles.tabContentTitle}>Specifications</h3>
                </div>
              </div>
            </>
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            tab 2
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            tab 3
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
