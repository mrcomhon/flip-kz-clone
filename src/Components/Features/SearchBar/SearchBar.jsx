import SearchIcon from '../../../assets/icons/search.svg?react'
import styles from './SearchBar.module.scss'

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <form
        action="/search"
        name="search"
        className={styles.searchForm}
      >
        <input
          className={styles.searchInput}
          type="search"
          id="search"
          name="search"
          placeholder="Поиск на FlipClone: 1 000 000 товаров"
        />
        <button
          className={styles.buttonSearch}
          title="Поиск"
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
