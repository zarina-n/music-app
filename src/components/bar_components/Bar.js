import { StyledBar, StyledBarContent } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Bar() {
  const allTracks = useSelector((state) => state.track?.tracks)
  const selectedTrack = useSelector((state) => state.track?.currentTrack)

  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const audioRef = useRef()

  useEffect(() => {
    if (allTracks) {
      setTracks(allTracks)
      setCurrentTrack(selectedTrack)
    }
  }, [allTracks, selectedTrack, currentTrack])

  // console.log(currentTrack?.track_file)

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  //console.log(audioRef.current.src)

  return (
    <StyledBar>
      <StyledBarContent>
        <audio ref={audioRef}>
          <source src={currentTrack?.track_file} type="audio/mpeg" />
        </audio>

        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          album={currentTrack?.album}
          name={currentTrack?.name}
          volume={volume}
          setVolume={setVolume}
        />
      </StyledBarContent>
    </StyledBar>
  )
}

export default Bar
