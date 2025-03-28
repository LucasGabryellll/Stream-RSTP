import { ReactNode } from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";

import styles from "./styles.module.css";

type Props = {
  children?: ReactNode
}

export function Header({ children }: Props) {
  return (
    <header className={styles.content}>
      <div className={styles['content-option']}>
        <Logo />

        <div className={styles.filters}>
          <button className={styles['description-filter']}>
            <p>Ao Vivo</p>
          </button>

          <button className={styles['description-filter']}>
            <p>Câmeras</p>
          </button>

          <button className={styles['description-filter']}>
            <p>Série</p>
          </button>
        </div>
      </div>

      <Search />
    </header>
  );
}