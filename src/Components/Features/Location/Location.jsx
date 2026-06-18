import location from '../../../assets/icons/location.svg'

import styles from "./Location.module.scss";

function Location({className}) {
  return (
    <div className={`${styles.location} ${className}`}>
      <div className={`${styles.city} p300`}>Астана</div>
      <div className={styles.gapRow}>
        <img
          src={location}
          alt=""
          width=""
          height=""
          loading="lazy"
        />
        <div className="p500">Уточните адрес</div>
      </div>
    </div>
  )
}

export default Location