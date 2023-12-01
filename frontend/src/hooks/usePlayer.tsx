import { useState } from "react";

export function useControllsPlayer() {
    const [playerState, setPlayerState] = useState({
        playing: false,
        controls: false,
        muted: false,
        volume: 100
    });

    function handlePlayPause() {
        setPlayerState({ ...playerState, playing: !playerState.playing });
    }

    function handleOnMuted() {
        setPlayerState({ ...playerState, volume: playerState.volume === 0 ? 0.2 : 0 });
    }

    function handleAlterVolume(volume?: any) {
        setPlayerState({...playerState, volume: volume * 0.01});
    }

    return { playerState, handlePlayPause, handleOnMuted, handleAlterVolume };
}