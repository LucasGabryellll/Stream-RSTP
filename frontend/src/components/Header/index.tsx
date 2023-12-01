import { ButtonLogout } from "../ButtonLogout";
import styles from "./styles.module.css";

export function Header() {
  return (
    <div
      className={`${styles['container-header']} ${styles['content-gradient']}`}
    >
      <div className={styles['content-information']}>
        <p className={styles['text-page']}>CAMERAS IN LIVE</p>
        
        <ButtonLogout />
      </div>
    </div>
  );
}