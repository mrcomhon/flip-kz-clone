import LocationIcon from '../../../assets/icons/location.svg?react'
import styles from "./Location.module.scss";

function Location({className}) {
  return (
    <div className={`${styles.location} ${className} `}>
      <span className={`${styles.city} p300 hidden-tablet`}>Астана</span>
      <div className={styles.gapRow}>
        <LocationIcon className={`${styles.icon} hidden-tablet`}/>
        <div className="p500 hidden-tablet">Уточните адрес</div>
        <LocationIcon className={`${styles.icon} visible-tablet`}/>
        <span className={`${styles.city} p500 visible-tablet`}>Астана</span>
        <a href="#" className={`${styles.mobileAddress} visible-tablet p500`}>уточните город и адрес доставки ▾</a>
      </div>
    </div>
  )
}

export default Location