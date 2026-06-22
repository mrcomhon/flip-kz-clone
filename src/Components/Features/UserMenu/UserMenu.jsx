import styles from './UserMenu.module.scss'
import Cart from "@/Components/Features/Cart/Cart";
import Favorite from "@/Components/Features/Favorite/Favorite";
import LangSwitcher from "@/Components/Features/LanguageSwitcher/LangSwitcher";
import Auth from "@/Components/Features/Auth/Auth";

function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Cart />
      <Favorite />
      <LangSwitcher className="hidden-tablet"/>
      <Auth />
    </div>
  )
}

export default UserMenu