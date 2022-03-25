import styles from 'styles/Search.module.css'

export default function Search() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Search your  Products"/>
    </form>
  )
}