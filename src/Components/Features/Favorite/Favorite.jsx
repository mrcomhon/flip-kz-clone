import styles from "@/Components/Features/Favorite/Favorite.module.scss";
import favorite from "@/assets/icons/favourite.svg";


function Favorite() {
  return(
    <a className={styles.favorite}>
      <img
        src={favorite}
        alt=""
        width=""
        height=""
        loading="lazy"
      />
    </a>
  )
}

export default Favorite