import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Bar() {
  // const allTracks = useSelector((state) => state.track?.tracks)
  const selectedTrack = useSelector((state) => state.track?.currentTrack)

  // const [tracks, setTracks] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(20)

  const audioRef = useRef()
  const progressRef = useRef()

  useEffect(() => {
    progressRef.current.max = selectedTrack?.duration_in_seconds
  }, [selectedTrack])

  // useEffect(() => {
  //   audioRef.current = new Audio(selectedTrack?.track_file)
  // }, [selectedTrack])

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.play()
  //   } else {
  //     audioRef.current.pause()
  //   }
  // }, [isPlaying])

  const changeRange = (event) => {
    audioRef.current.currentTime = progressRef.current.value
    console.log(event.target.value)
  }

  const getTrackProgress = (time, duration) => {
    return (time / duration) * 100
  }

  return (
    <StyledBar>
      <audio src={selectedTrack?.track_file} ref={audioRef} />
      <StyledBarContent>
        <PlayerProgress>
          <input
            type="range"
            defaultValue={0}
            ref={progressRef}
            onChange={changeRange}
          />
        </PlayerProgress>

        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          album={selectedTrack?.album}
          name={selectedTrack?.name}
          volume={volume}
          setVolume={setVolume}
        />
      </StyledBarContent>
    </StyledBar>
  )
}

export default Bar
