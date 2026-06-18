import styles from "./LogoWrapper.module.scss";
import logo from "../../../assets/icons/logo.svg";
import Location from "@/Components/Features/Location/Location";


function LogoWrapper() {
  return (
    <div className={styles.logoWrapper}>
      <a
        href="/"
        alt="Home-page"
      >
        <img
          src={logo}
          alt=""
          width="60px"
          height=""
          loading="lazy"
          className={styles.logo}
        />
      </a>
      <Location />
    </div>
  )
}

export default LogoWrapper