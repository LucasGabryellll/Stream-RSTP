import { UserLogged } from '../UserLogged';
import styles from './styles.module.css';

export function Footer() {
    return (
        <footer
            className={styles['footer']}>
            <p className={styles['description']}>
                &copy; Copyright 2023 - Lucas Gabryel | Vidatel
            </p>

            <UserLogged/>
        </footer>
    );
}
