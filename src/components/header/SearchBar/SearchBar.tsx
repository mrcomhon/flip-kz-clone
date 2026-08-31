import { useTranslation } from "react-i18next";
import SearchIcon from "@/assets/icons/search.svg?react";
import styles from "./SearchBar.module.scss";

export function SearchBar() {
  const { t } = useTranslation();

  return (
    <div className={styles.searchBar}>
      <form action="/search" name="search" className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="search"
          id="search"
          name="search"
          placeholder={t("header.search.placeholder")}
        />
        <button
          className={styles.buttonSearch}
          title={t("header.search.title")}
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
