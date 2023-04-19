import styles from './Item.module.scss'
import logo from 'assets/logo.svg'

export function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> Pasta </h2>
          <p> Carbonara </p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__type}>
            Massa
          </div>
          <div className={styles.item__portion}>
            400g
          </div>
          <div className={styles.item__peopleqty}>
            Serve um caminhão de gente
          </div>
          <div className={styles.item__price}>
            R$caro
          </div>
        </div>
      </div>
    </div>
  )
}