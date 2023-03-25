import styles from './Sorter.module.scss'
import options from "./options.json"

export function Sorter() {
  return (
    <button className={styles.sorter}>
      <span>Ordenar por</span>
      <div className={styles.sorter__options}>
        {options.map(option => (
          <div className={styles.sorter__option} key={option.value}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}