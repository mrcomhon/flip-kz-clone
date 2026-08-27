import LogoIcon from "@/assets/icons/logo.svg?react";
import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a href="/logo" title="Home-page" className={className}>
      <LogoIcon className={styles.logo} />
    </a>
  );
}
