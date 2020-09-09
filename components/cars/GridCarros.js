import Link from 'next/link'
import styles from '../../styles.module.css'

export default function Cars({ cars }) {
  return (
    <div className={styles.contentContainer}>
      <Link href="/cars/[id]" as={`/cars/${cars.id}`}>
        <a>
          {cars.name}
          <img className={styles.imageCar} src={`/cars/${cars.image}`} alt="my image" />
          <span>{cars.price}</span>
        </a>
      </Link>
    </div>
  )
}
