import {
  StyledBar,
  StyledBarContent,
  PlayerProgress,
} from "./bar_components/Bar.styled";
import Player from "./bar_components/Player";
import { useState, useRef, useEffect } from "react";

function Bar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(0);
  const audioRef = useRef();
  const progressRef = useRef();

  function getSongProgress(time, duration) {
    return (time / duration) * 100;
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;

    setSongProgress({
      progress: getSongProgress(currentTime, duration),
      length: duration,
    });
  };

  const getWidth = (event) => {
    const width = progressRef.current.clientWidth;

    const offset = event.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;
    audioRef.current.currentTime = (divProgress / 100) * songProgress.length;
  };

  return (
    <StyledBar>
      <StyledBarContent>
        <audio ref={audioRef} onTimeUpdate={onPlaying}>
          <source src="/music/Баста – Ты та….mp3" type="audio/mpeg" />
        </audio>
        <PlayerProgress onClick={getWidth} ref={progressRef}>
          <div style={{ width: `${songProgress.progress}%` }} />
        </PlayerProgress>
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
      </StyledBarContent>
    </StyledBar>
  );
}

export default Bar;
