import styles from "./LogoWrapper.module.scss";
import Location from "@/Components/Features/Location/Location";
import Logo from "@/Components/Features/Logo/Logo";
import Burger from "@/assets/icons/burger.svg?react"


function LogoWrapper({LogoClass, LocationClass, BurgerClass}) {
  return (
    <div className={styles.logoWrapper}>
      <span
        className={clsx(styles.burgerButton, 'visible-tablet', BurgerClass, 'reset-button')}
        onClick={activeButton}
      >
        <Burger />
      </span>
      <Logo className={LogoClass}/>
      <Location className={LocationClass}/>
    </div>
  )
}

export default LogoWrapper