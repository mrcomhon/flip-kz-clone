import logo from "../../../assets/icons/logo.svg"
import styles from "@/Components/Features/Logo/Logo.module.scss";

function Logo() {
  return (
    <a
      href="/public"
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
  )
}

export default Logo