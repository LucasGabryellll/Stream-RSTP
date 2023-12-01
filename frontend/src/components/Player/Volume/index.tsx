import { HiVolumeUp } from "@react-icons/all-files/hi/HiVolumeUp";
import { FaVolumeMute } from "@react-icons/all-files/fa/FaVolumeMute";

import { IconCustomize } from "@/components/IconCustomize";

import styles from "./styles.module.css";

interface VolumeProps {
  playerState: {
    playing: boolean,
    controls: boolean,
    muted: boolean,
    volume: number
  };
  onMuted: () => void;
  alterVolume: (volume: number) => void
}

export function Volume({ playerState, onMuted, alterVolume }: VolumeProps) {
  return (
    <>
      <div className={styles['content-volume']}>
        {playerState.volume > 0 &&

          <IconCustomize.Root onPress={onMuted}>
            <IconCustomize.Icon IconElement={HiVolumeUp} className={styles['icon-volume']}/>
          </IconCustomize.Root>
        }

        {playerState.volume === 0 &&
          <IconCustomize.Root onPress={onMuted}>
            <IconCustomize.Icon IconElement={FaVolumeMute} className={styles['icon-volume']} />
          </IconCustomize.Root>
        }

        <input
          type="range"
          min={0}
          max={90}
          step={10}
          value={(playerState.volume * 100)}
          onChange={(e) => alterVolume(Number(e.target.value))}
          className={styles['slider']}
        />
      </div>
    </>
  );
}