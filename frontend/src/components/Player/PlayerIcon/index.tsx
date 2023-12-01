import Image from "next/image";
import playIcon from '@/assets/play.png';

import styles from "./styles.module.css";

interface PlayIconProps {
    onPress: () => void
}

function PlayIcon({onPress}: PlayIconProps) {
    return (
        <Image
            className={styles['icon']}
            src={playIcon}
            alt='Play'
            onClick={onPress}
        />
    )
}

export { PlayIcon };