import styles from "./LogoWrapper.module.scss";
import Location from "@/Components/Features/Location/Location";
import Logo from "@/Components/Features/Logo/Logo";


function LogoWrapper() {
  return (
    <div className={styles.logoWrapper}>
      <Logo />
      <Location />
    </div>
  )
}

export default LogoWrapper