import styles from "@/Components/Features/Auth/Auth.module.scss";
import {useState} from "react";
import DesktopAuth
  from "@/Components/Features/Auth/Components/DesktopAuth/DesktopAuth";
import MobileAuth
  from "@/Components/Features/Auth/Components/MobileAuth/MobileAuth";
import {useDarkenBackground} from "@/hooks/useDarkenBackground";

function Auth() {
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

export default Auth