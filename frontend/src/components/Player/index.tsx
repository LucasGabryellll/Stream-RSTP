"use client";

import { useRef } from "react";
import screenful from "screenfull";

import ReactPlayer from 'react-player/lazy';

import { PlayIcon } from './PlayerIcon';
import { ControlPlayer } from './ControlPlayer';

import { useControllsPlayer } from "@/hooks/usePlayer";

import styles from "./styles.module.css";

interface PlayerProps {
    descriptionCam: string;
    url: string
}

export function Player({ descriptionCam, url }: PlayerProps) {
    const { playerState, handlePlayPause, handleOnMuted, handleAlterVolume } = useControllsPlayer();

    const playerContainerRef = useRef<any>();

    const toggleFullScreen = () => {
        screenful.toggle(playerContainerRef?.current);
    };


    return (
        <div className={styles['container']}>
            <p className={styles['description-cam']}>{descriptionCam}</p>

            <div className={styles['content-player']} ref={playerContainerRef} onDoubleClick={toggleFullScreen}>

                <ReactPlayer
                    suppressHydrationWarning={true}
                    width={"100%"}
                    height={"100%"}
                    url={url}
                    playing={playerState.playing}
                    playsinline
                    volume={playerState.volume}
                />

                {!playerState.playing && <PlayIcon onPress={handlePlayPause} />}

                <ControlPlayer
                    onPlayPause={handlePlayPause}
                    playerState={playerState}
                    onFullScreen={toggleFullScreen}
                    onMuted={handleOnMuted}
                    handleAlterVolume={handleAlterVolume}
                />
            </div>
        </div>
    );
}