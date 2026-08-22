import LogoIcon from "@/assets/icons/logo.svg?react";
import styles from "./Logo.module.scss";

export function Logo({className}) {
  return (
    <a
      href="/logo"
      title="Home-page"
      className={className}
    >
      <LogoIcon className={styles.logo} />
    </a>
  )
}
