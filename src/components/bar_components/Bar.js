import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentTrack } from '../../features/track/trackSlice'
//import { useGetTrackByIdQuery } from '../features/track/trackApiSlice'

function Bar() {
  const track = useSelector(selectCurrentTrack)
  console.log(track?.track_file)

  const [isPlaying, setIsPlaying] = useState(false)
  const [songProgress, setSongProgress] = useState(0)
  const audioRef = useRef()
  const progressRef = useRef()

  function getSongProgress(time, duration) {
    return (time / duration) * 100
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const onPlaying = () => {
    // const duration = audioRef.current.duration
    const duration = track?.duration_in_seconds
    const currentTime = audioRef.current.currentTime

    console.log(duration, currentTime)

    setSongProgress({
      progress: getSongProgress(currentTime, duration),
      length: duration,
    })
  }

  const getWidth = (event) => {
    const width = progressRef.current.clientWidth

    const offset = event.nativeEvent.offsetX

    const divProgress = (offset / width) * 100
    audioRef.current.currentTime = (divProgress / 100) * songProgress.length
  }

  return (
    <StyledBar>
      <StyledBarContent>
        <audio ref={audioRef} onTimeUpdate={onPlaying}>
          <source src={track?.track_file} type="audio/mpeg" />
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
  )
}

export default Bar
