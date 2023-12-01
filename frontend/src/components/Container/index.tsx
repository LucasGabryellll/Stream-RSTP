import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <main className={styles['container-main']}>
            {children}
        </main>
    )
}