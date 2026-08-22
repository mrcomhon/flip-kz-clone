import styles from "@/components/Features/Auth/Auth.module.scss";
import {useState} from "react";
import DesktopAuth
  from "@/components/Features/Auth/Components/DesktopAuth/DesktopAuth";
import MobileAuth
  from "@/components/Features/Auth/Components/MobileAuth/MobileAuth";
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
