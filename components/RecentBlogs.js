import styles from '../styles/RecentBlogs.module.css'
import Image from 'next/image'
import blogImageOne from 'public/img/recent-blogs/blog-image-1@2x.webp'
import blogImageTwo from 'public/img/recent-blogs/blog-image-2@2x.webp'
import blogImageThree from 'public/img/recent-blogs/blog-image-3@2x.webp'

export default function RecentBlogs() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Recent Blogs
      </h2>
      <p className={styles.description}>
        Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby cries as if in dire pain.
      </p>
      <div className={styles.blogs}>

        <div className={styles.blog}>
          <Image src={blogImageOne} />
          <span className={styles.blogDate}>
            October 27, 2021
          </span>
          <h4 className={styles.blogTitle}>
            Dog Winter Care with HUFT
          </h4>
          <p className={styles.blogExcerpt}>
            Offering our highest concentration of CBD per mL, this extract is ideal for those who want to step up their CBD supplement routine.  for those who want to step up their CBD supplement  for those who…
            <button className={styles.readMore}>
              Read More
            </button>
          </p>
        </div>

        <div className={styles.blog}>
          <Image src={blogImageTwo} />
          <span className={styles.blogDate}>
            October 27, 2021
          </span>
          <h4 className={styles.blogTitle}>
            Dog Winter Care with HUFT
          </h4>
          <p className={styles.blogExcerpt}>
            Offering our highest concentration of CBD per mL, this extract is ideal for those who want to step up their CBD supplement routine.  for those who want to step up their CBD supplement  for those who…
            <button className={styles.readMore}>
              Read More
            </button>
          </p>
        </div>

        <div className={styles.blog}>
          <Image src={blogImageThree}/>
          <span className={styles.blogDate}>
            October 27, 2021
          </span>
          <h4 className={styles.blogTitle}>
            Dog Winter Care with HUFT
          </h4>
          <p className={styles.blogExcerpt}>
            Offering our highest concentration of CBD per mL, this extract is ideal for those who want to step up their CBD supplement routine.  for those who want to step up their CBD supplement  for those who…
            <button className={styles.readMore}>
              Read More
            </button>
          </p>
        </div>

      </div>
    </div>
  )
}