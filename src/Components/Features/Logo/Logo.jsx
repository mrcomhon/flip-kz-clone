import logo from "../../../assets/icons/logo.svg"
import styles from "@/Components/Features/Logo/Logo.module.scss";

function Logo({className}) {
  return (
    <a
      href="/public"
      title="Home-page"
      className={className}
    >
      <img
        src={logo}
        alt="FlipClone.kz"
        width="60px"
        height=""
        loading="lazy"
        className={styles.logo}
      />
    </a>
  )
}

export default Logo