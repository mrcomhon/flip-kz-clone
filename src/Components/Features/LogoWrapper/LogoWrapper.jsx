import styles from "./LogoWrapper.module.scss";
import Location from "@/Components/Features/Location/Location";
import Logo from "@/Components/Features/Logo/Logo";


function LogoWrapper({LogoClass, LocationClass}) {
  return (
    <div className={styles.logoWrapper}>
      <Logo className={LogoClass}/>
      <Location className={LocationClass}/>
    </div>
  )
}

export default LogoWrapper