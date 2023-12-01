import { BsFillPauseFill } from "@react-icons/all-files/bs/BsFillPauseFill";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { BiFullscreen } from "@react-icons/all-files/bi/BiFullscreen";

import { IconCustomize } from "@/components/IconCustomize";

import { Volume } from "../Volume";

import styles from "./styles.module.css";

interface ControlPlayer {
  onPlayPause: () => void;
  playerState: {
    playing: boolean,
    controls: boolean,
    muted: boolean,
    volume: number
  };
  onFullScreen: () => void;
  onMuted: () => void;
  handleAlterVolume: () => void;
}

export function ControlPlayer({ onPlayPause, playerState, onFullScreen, onMuted, handleAlterVolume }: ControlPlayer) {

  return (
    <div className={styles['container-player']} suppressHydrationWarning={true}>
      <div className={styles['content']}>
        <div className={styles['content-icons']}>
          {playerState.playing &&
            < IconCustomize.Root onPress={onPlayPause}>
              <IconCustomize.Icon IconElement={BsFillPauseFill} className="h-8 w-8" />
            </IconCustomize.Root>
          }

          {!playerState.playing &&
            <IconCustomize.Root onPress={onPlayPause}>
              <IconCustomize.Icon IconElement={FaPlay} className="w-8" />
            </IconCustomize.Root>
          }

          <Volume playerState={playerState} onMuted={onMuted} alterVolume={handleAlterVolume}/>

          <div className={styles['content-in-live']}>
            <div className={styles['div-rec']} />
            LIVE
          </div>
        </div>

        <div className={styles['content-icons']}>
          <IconCustomize.Root onPress={onFullScreen}>
            <IconCustomize.Icon IconElement={BiFullscreen} className="h-6 w-8" />
          </IconCustomize.Root>
        </div>
      </div>
    </div >
  )
}