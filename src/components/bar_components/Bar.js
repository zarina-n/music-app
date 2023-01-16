import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCurrentTrack,
  setShuffleState,
} from '../../features/track/trackSlice'

function Bar() {
  const dispatch = useDispatch()
  const route = document.location.pathname
  const allTracks = useSelector((state) => state.track?.filteredTracks)
  const favoriteTracks = useSelector((state) => state.track?.favoriteTracks)
  const playlistTracks = useSelector((state) => state.track?.playlistTracks)
  const track = useSelector((state) => state.track?.currentTrack)

  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(30)
  const [songLength, setSongLength] = useState(0)
  const [songProgress, setSongProgress] = useState(0)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [visibleBar, setVisibleBar] = useState(false)

  const audioRef = useRef(null)
  const progressRef = useRef()

  useEffect(() => {
    currentTrack ? setVisibleBar(true) : setVisibleBar(false)
  }, [currentTrack])

  useEffect(() => {
    setCurrentTrack(track)
    dispatch(getCurrentTrack(track))
  }, [track, dispatch])

  useEffect(() => {
    if (route === '/') {
      setTracks(allTracks)
    }
    if (route.includes('/my-tracks')) {
      setTracks(favoriteTracks)
    }
    if (route.includes('/compilations/')) {
      setTracks(playlistTracks)
    }
  }, [track])

  useEffect(() => {
    const index = tracks?.findIndex((track) => track.id === currentTrack?.id)
    setIndex(index)
  }, [tracks, currentTrack?.id])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
        audioRef.current.loop = repeat
        audioRef.current.volume = volume / 100
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, repeat, volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    let timeOut = null

    const onEnded = () => {
      setCurrentTrack(tracks[index + 1])
      dispatch(getCurrentTrack(tracks[index + 1]))
    }

    const onPlaying = () => {
      if (!audioRef.current.paused) {
        const { duration } = audioRef.current
        const { currentTime } = audioRef.current

        setSongProgress((currentTime / duration) * 100)
        setSongLength(duration)
      }
    }

    if (audioRef.current) {
      audioRef.current.pause()
    }

    if (track) {
      audioRef.current = new Audio(currentTrack?.track_file)
      audioRef.current.addEventListener('ended', onEnded)

      timeOut = setInterval(onPlaying, 100)
      audioRef.current.play()
      audioRef.current.volume = volume / 100
      setIsPlaying(true)
    }

    return () => {
      if (timeOut) {
        clearInterval(timeOut)
      }
      if (audioRef.current) {
        audioRef.current.pause()
      }

      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', onEnded)
      }
    }
  }, [track, currentTrack?.track_file, index, dispatch, tracks])

  const getWidth = (event) => {
    const width = progressRef.current.clientWidth
    const offset = event.nativeEvent.offsetX

    const divProgress = (offset / width) * 100
    audioRef.current.currentTime = (divProgress / 100) * songLength
  }

  useEffect(() => {
    audioRef.loop = repeat
  }, [repeat])

  useEffect(() => {
    dispatch(setShuffleState(shuffle))
  }, [shuffle, dispatch])

  return (
    <StyledBar visible={visibleBar}>
      <StyledBarContent>
        <PlayerProgress ref={progressRef} onClick={getWidth}>
          <div style={{ width: `${songProgress}%` }} />
        </PlayerProgress>
        <Player
          isPlaying={isPlaying}
          playPause={() => setIsPlaying((isPlaying) => !isPlaying)}
          audioRef={audioRef}
          author={currentTrack?.author}
          name={currentTrack?.name}
          volume={volume}
          setVolume={setVolume}
          handleRepeat={() => setRepeat((repeat) => !repeat)}
          handleShuffle={() => setShuffle((shuffle) => !shuffle)}
          repeat={repeat}
          shuffle={shuffle}
          currentTrack={currentTrack}
          index={index}
          setCurrentTrack={setCurrentTrack}
          tracks={tracks}
        />
      </StyledBarContent>
    </StyledBar>
  )
}

export default Bar
