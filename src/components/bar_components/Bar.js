import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { shuffleFilteredTracks } from '../../features/track/trackSlice'

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

  const audioRef = useRef(null)
  const progressRef = useRef()

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

    setCurrentTrack(track)
  }, [route, allTracks, favoriteTracks, playlistTracks, track])

  // useEffect(() => {
  //   if (shuffle && route === '/') {
  //     dispatch(shuffleFilteredTracks())
  //   }
  // }, [dispatch, route, shuffle])

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
      timeOut = setInterval(onPlaying, 100)
      audioRef.current.play()
      audioRef.current.volume = volume / 100
      setIsPlaying(true)
    }

    return () => {
      if (timeOut) {
        clearInterval(timeOut)
      }
    }
  }, [track, currentTrack?.track_file, volume])

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
    if (shuffle) {
      console.log(tracks)
    }
  }, [shuffle, tracks])

  const nextTrack = () => {
    if (index === tracks?.length - 1) {
      setCurrentTrack(tracks[0])
    }

    setCurrentTrack(tracks[index + 1])
  }

  const previousTrack = () => {
    if (index === 0) {
      setCurrentTrack(tracks.length - 1)
    }
    setCurrentTrack(tracks[index + 1])
  }

  // const shuffleArray = (arr) => {
  //   tracks = [...tracks].sort(() => Math.random() - 0.5)
  // }

  return (
    <StyledBar>
      <StyledBarContent>
        <PlayerProgress ref={progressRef} onClick={getWidth}>
          <div style={{ width: `${songProgress}%` }} />
        </PlayerProgress>
        <Player
          isPlaying={isPlaying}
          playPause={() => setIsPlaying((isPlaying) => !isPlaying)}
          audioRef={audioRef}
          album={currentTrack?.album}
          name={currentTrack?.name}
          volume={volume}
          setVolume={setVolume}
          handleRepeat={() => setRepeat((repeat) => !repeat)}
          handleShuffle={() => setShuffle((shuffle) => !shuffle)}
          repeat={repeat}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          shuffle={shuffle}
        />
      </StyledBarContent>
    </StyledBar>
  )
}

export default Bar
