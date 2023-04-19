import styles from './Items.module.scss'
import { Item } from './Item'
import menu from './items.json'


export function Items() {
  return (
    <div className={styles.items}>
      {menu.map(item => (
        <div>
          <Item key={item.id}/>
        </div>
      ))}
    </div>
  )
}