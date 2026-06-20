import styles from "@/Components/Features/LanguageSwitcher/LangSwitcher.module.scss";


function LangSwitcher() {
  return (
    <div className={styles.langSwitcherWrapper}>
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