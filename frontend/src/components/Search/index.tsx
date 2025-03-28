import search from "@/assets/search.svg";

import styles from './styles.module.css';
import Image from "next/image";

export function Search() {
  return (
    <div className={styles['content-search']}>
      <Image alt="icon-search" src={search} width={22} height={22} />

      <input
        type='search'
        placeholder='Pesquisar...'
        className={`${styles.input} search-cancel-white`}
      />
    </div>
  );
}