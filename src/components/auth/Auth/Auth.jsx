import { useState } from "react";
import { DesktopAuth } from "@/components/auth/DesktopAuth";
import { MobileAuth } from "@/components/auth/MobileAuth";
import { useDarkenBackground } from "@/hooks/useDarkenBackground";
import styles from "./Auth.module.scss";

export function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMenu = () => setIsModalOpen(true)
  const closeMenu = () => setIsModalOpen(false)

  useDarkenBackground(isModalOpen)

  return (
    <div className={styles.authHover}>
      <DesktopAuth
        onOpen={openMenu}
        onClose={closeMenu}
        isModalOpen={isModalOpen}
      />

      <MobileAuth />
    </div>)
}
