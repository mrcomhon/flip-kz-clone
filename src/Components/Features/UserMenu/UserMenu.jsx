import styles from './UserMenu.module.scss'
import Cart from "@/components/Features/Cart/Cart";
import Favorite from "@/components/Features/Favorite/Favorite";
import LangSwitcher from "@/components/Features/LanguageSwitcher/LangSwitcher";
import Auth from "@/components/auth/Auth";

function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Auth />
      <LangSwitcher className="hidden-tablet"/>
      <Favorite />
      <Cart />
    </div>
  )
}

export default UserMenu
