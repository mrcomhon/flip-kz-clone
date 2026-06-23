import LogoIcon from "../../../assets/icons/logo.svg?react"
import styles from "@/Components/Features/Logo/Logo.module.scss";

function Logo({className}) {
  return (
    <a
      href="/public"
      title="Home-page"
      className={className}
    >
      <LogoIcon className={styles.logo} />
    </a>
  )
}

export default Logo