import styles from "@/Components/Features/LanguageSwitcher/LangSwitcher.module.scss";
import clsx from "clsx";


function LangSwitcher({className}) {
  return (
    <div className={clsx(styles.langSwitcherWrapper, className)}>
      <div className={styles.langSwitcher}>
        <input
          id="kz"
          name="lang"
          value="kz"
          type="radio"
        />
        <label htmlFor="kz">Қаз</label>
        <input
          id="ru"
          name="lang"
          value="ru"
          type="radio"
          defaultChecked
        />
        <label htmlFor="ru">Рус</label>
      </div>
    </div>
  )
}

export default LangSwitcher