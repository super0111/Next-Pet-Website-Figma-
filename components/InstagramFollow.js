import styles from 'styles/InstagramFollow.module.css'
import igPhoto1 from 'public/img/follow-instagram/ig-photo-1@2x.webp'
import igPhoto2 from 'public/img/follow-instagram/ig-photo-2@2x.webp'
import igPhoto3 from 'public/img/follow-instagram/ig-photo-3@2x.webp'
import igPhoto4 from 'public/img/follow-instagram/ig-photo-4@2x.webp'
import igPhoto5 from 'public/img/follow-instagram/ig-photo-5@2x.webp'
import igIcon from 'public/img/follow-instagram/instagram.webp'
import Image from 'next/image'

export default function InstagramFollow() {
  return (
    <div>
      <div className={styles.photos}>

        <div className={styles.photo}>
          <Image src={igPhoto1}/>
          <span className={styles.icon}>
              <Image src={igIcon}
                     width={29}
                     height={29}/>
            </span>
        </div>

        <div className={styles.photo}>
          <Image src={igPhoto2}/>
          <span className={styles.icon}>
              <Image src={igIcon}
                     width={29}
                     height={29}/>
            </span>
        </div>

        <div className={styles.photo}>
          <Image src={igPhoto3}/>
          <span className={styles.icon}>
              <Image src={igIcon}
                     width={29}
                     height={29}/>
            </span>
        </div>

        <div className={styles.photo}>
          <Image src={igPhoto4}/>
          <span className={styles.icon}>
              <Image src={igIcon}
                     width={29}
                     height={29}/>
            </span>
        </div>

        <div className={styles.photo}>
          <Image src={igPhoto5}/>
          <span className={styles.icon}>
              <Image src={igIcon}
                     width={29}
                     height={29}/>
            </span>
        </div>


      </div>

      <div className={styles.followUs}>
        <div className="container mx-auto">
          Follow us on instagram @petsupply.official
        </div>
      </div>
    </div>
  )
}