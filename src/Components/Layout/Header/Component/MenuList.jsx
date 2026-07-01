import styles
  from "@/Components/Layout/Header/Component/MenuList.module.scss";
import {MdWindow} from "react-icons/md";
import {BsCurrencyDollar, BsFire} from "react-icons/bs";
import {BsFillCreditCardFill} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {IoCart} from "react-icons/io5";
import {IoMdHeart} from "react-icons/io";
import {MdHelp} from "react-icons/md";
import {BiLogoTelegram} from "react-icons/bi";

function MenuList() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="#"
          className={styles.item}
        >
          <MdWindow />
          <p>Каталог</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.item}
        >
          <BsFire />
          <p>Скидки и акции</p>
        </a>
      </li>
      <li className={styles.last}>
        <a
          href="#"
          className={styles.item}
        >
          <BsFillCreditCardFill />
          <p>Подарочные карты</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.item}
        >
          <ImLocation />
          <p style={{color: 'var(--color-blue-light)'}}>Алматы</p>
        </a>
      </li>
      <li className={styles.last}>
        <a
          href="#"
          className={styles.item}
        >
          <IoCart />
          <p>Корзина</p>
        </a>
      </li>
      <li className={styles.last}>
        <a
          href="#"
          className={styles.item}
        >
          <IoMdHeart />
          <p>Избранное</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.item}
        >
          <MdHelp />
          <p>Помощь</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.item}
        >
          <BiLogoTelegram />
          <p>Способы доставки</p>
        </a>
      </li>
      <li className={styles.last}>
        <a
          href="#"
          className={styles.item}
        >
          <BsCurrencyDollar />
          <p>Способы оплаты</p>
        </a>
      </li>
    </ul>
  )
}

export default MenuList