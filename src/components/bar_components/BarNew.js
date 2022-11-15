import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Bar() {
  const allTracks = useSelector((state) => state.track.tracks)

  const [tracks, setTracks] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({})
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(50)

  useEffect(() => {
    if (allTracks) {
      setTracks(allTracks)
      setCurrentTrack(tracks[0])
    } else {
      return
    }
  }, [tracks, allTracks])

  //console.log(currentTrack)

  const audioRef = useRef()
  const progressRef = useRef()

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
      // console.log(audioRef.current.volume)
    }
  }, [volume])

  function getTrackProgress(time, duration) {
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
    const duration = currentTrack.duration_in_seconds
    const currentTime = audioRef.current.currentTime

    setCurrentTrack({
      ...currentTrack,
      progress: getTrackProgress(currentTime, duration),
      length: duration,
    })
  }

  const getWidth = (event) => {
    const width = progressRef.current.clientWidth

    const offset = event.nativeEvent.offsetX

    const divProgress = (offset / width) * 100

    const newCurrentTime = (divProgress / 100) * currentTrack.length

    audioRef.current.currentTime = newCurrentTime
  }

  const previousTrack = () => {
    const index = tracks.findIndex((track) => track.name === currentTrack.name)

    if (index === 0) {
      setCurrentTrack(tracks[tracks.length - 1])
    } else {
      setCurrentTrack(tracks[index - 1])
    }

    // console.log(currentTrack.track_file)

    audioRef.current.currentTime = 0
  }

  const nextTrack = () => {
    const index = tracks.findIndex((track) => track.name === currentTrack.name)

    if (index === tracks.length - 1) {
      setCurrentTrack(tracks[0])
    } else {
      setCurrentTrack(tracks[index + 1])
    }

    // console.log(audioRef.current.currentSrc)

    audioRef.current.currentTime = 0
  }

  const repeatTrack = () => {
    audioRef.current.loop = repeat
    setRepeat(!repeat)
    console.log(repeat)
  }

  const shuffleTrack = () => {
    setCurrentTrack(tracks[Math.floor(Math.random() * tracks.length)])

    audioRef.current.currentTime = 0
    console.log(currentTrack.track_file)
  }
  //console.log(currentTrack?.track_file)

  return (
    <StyledBar>
      <StyledBarContent>
        <audio ref={audioRef} onTimeUpdate={onPlaying}>
          <source src={currentTrack?.track_file} type="audio/mpeg" />
        </audio>
        <PlayerProgress onClick={getWidth} ref={progressRef}>
          <div style={{ width: `${currentTrack?.progress}%` }} />
        </PlayerProgress>
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          album={currentTrack?.album}
          name={currentTrack?.name}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          repeatTrack={repeatTrack}
          repeat={repeat}
          shuffleTrack={shuffleTrack}
          volume={volume}
          setVolume={setVolume}
        />
      </StyledBarContent>
    </StyledBar>
  )
}

export default Bar
