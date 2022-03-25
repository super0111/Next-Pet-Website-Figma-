import styles from '../styles/Feedback.module.css'
import star from '../public/img/feedbacks/star.svg'
import Image from 'next/image'

export default function Feedback() {
  return (
    <div className={styles.wrapper}>
      <div className="container mx-auto">

        <h2 className={styles.heading}>
          Pet Parent Reviews
        </h2>
        <p className={styles.description}>
          Any parent will tell you that colic is one of the most excruciating experiences of early parenthood. The baby cries as if in dire pain.
        </p>
        <div className={styles.feedbacks}>

          <div className={styles.feedback}>
            <div className={styles.feedbackAvatar}>
              <Image src="/img/feedbacks/avatar-1@2x.webp" width={69} height={69} />
            </div>
            <div className={styles.rating}>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
            </div>
            <h4 className={styles.feedbackTitle}>
              It is Great! Amazing Products
            </h4>
            <p className={styles.feedbackText}>I bought all three I love them and would buy again. They grey one I think is made out of better Material. But overall I would buy again</p>
            <p className={styles.feedbackAuthor}>
              - Julia Sandoval
            </p>
          </div>

          <div className={styles.feedback}>
            <div className={styles.feedbackAvatar}>
              <Image src="/img/feedbacks/avatar-2@2x.webp" width={69} height={69} />
            </div>
            <div className={styles.rating}>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
            </div>
            <h4 className={styles.feedbackTitle}>
              It is Great! Amazing Products
            </h4>
            <p className={styles.feedbackText}>I bought all three I love them and would buy again. They grey one I think is made out of better Material. But overall I would buy again</p>
            <p className={styles.feedbackAuthor}>-Harvey Carter</p>
          </div>

          <div className={styles.feedback}>
            <div className={styles.feedbackAvatar}>
              <Image src="/img/feedbacks/avatar-3@2x.webp" width={69} height={69} />
            </div>
            <div className={styles.rating}>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
              <Image className={styles.star} src={star} width={27} height={27}/>
            </div>
            <h4 className={styles.feedbackTitle}>
              It is Great! Amazing Products
            </h4>
            <p className={styles.feedbackText}>I bought all three I love them and would buy again. They grey one I think is made out of better Material. But overall I would buy again</p>
            <p className={styles.feedbackAuthor}>-Francisco Soto</p>
          </div>
        </div>

      </div>
    </div>
  )
}