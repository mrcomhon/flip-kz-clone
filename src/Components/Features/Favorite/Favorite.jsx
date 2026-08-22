import styles from "@/components/Features/Favorite/Favorite.module.scss";
import FavoriteIcon from "@/assets/icons/favourite.svg?react";


function Favorite() {
  return(
    <a className={styles.favorite} href="#">
      <FavoriteIcon className={styles.icon}/>
    </a>
  )
}

export default Favorite
