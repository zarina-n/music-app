import { StyledBar, StyledBarContent, PlayerProgress } from './Bar.styled'
import Player from './Player'
import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTracks } from '../../features/track/trackSlice'

// const allTracks = [
//   {
//     album: 'Chase',
//     author: 'Alexander Nakarada',
//     duration_in_seconds: 205,
//     genre: 'Классическая музыка',
//     id: 8,
//     name: 'Chase',
//     release_date: '2005-06-11',
//     track_file:
//       'http://51.250.95.23:8000/django_media/music_files/Alexander_Nakarada_-_Chase.mp3',
//   },
//   {
//     album: 'Open Sea epic',
//     author: 'Frank Schroter',
//     duration_in_seconds: 165,
//     genre: 'Классическая музыка',
//     id: 9,
//     name: 'Open Sea epic',
//     release_date: '2019-06-12',
//     track_file:
//       'http://51.250.95.23:8000/django_media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
//   },
//   {
//     album: 'Sneaky Snitch',
//     author: 'Kevin Macleod',
//     duration_in_seconds: 305,
//     genre: 'Классическая музыка',
//     id: 10,
//     name: 'Sneaky Snitch',
//     release_date: '2022-04-16',
//     track_file:
//       'http://51.250.95.23:8000/django_media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3',
//   },
//   {
//     album: 'Secret Garden',
//     author: 'Mixkit',
//     duration_in_seconds: 324,
//     genre: 'Классическая музыка',
//     id: 11,
//     name: 'Secret Garden',
//     release_date: '1972-06-06',
//     track_file:
//       'http://51.250.95.23:8000/django_media/music_files/Mixkit_-_Secret_Garden.mp3',
//   },
//   {
//     album: '-',
//     author: '-',
//     duration_in_seconds: 255,
//     genre: 'Классическая музыка',
//     id: 12,
//     name: 'A journey of successfull winners',
//     release_date: '1985-02-02',
//     track_file:
//       'http://51.250.95.23:8000/django_media/music_files/Musiclfiles_-_A_Journey_For_Successful_Winners.mp',
//   },
// ]

function Bar() {
  const allTracks = useSelector(selectAllTracks)

  const [tracks, setTracks] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({})
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(30)

  useEffect(() => {
    if (allTracks) {
      setTracks(allTracks)
      setCurrentTrack(allTracks[2])
    }
  }, [allTracks])

  console.log(tracks)

  const audioRef = useRef()
  const progressRef = useRef()

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
      console.log(audioRef.current.volume)
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

    console.log(newCurrentTime)
    audioRef.current.currentTime = newCurrentTime
  }

  const previousTrack = () => {
    const index = tracks.findIndex((track) => track.name === currentTrack.name)

    if (index === 0) {
      setCurrentTrack(tracks[tracks.length - 1])
    } else {
      setCurrentTrack(tracks[index - 1])
    }

    console.log(currentTrack.track_file)

    audioRef.current.currentTime = 0
  }

  const nextTrack = () => {
    const index = tracks.findIndex((track) => track.name === currentTrack.name)

    if (index === tracks.length - 1) {
      setCurrentTrack(tracks[0])
    } else {
      setCurrentTrack(tracks[index + 1])
    }

    console.log(audioRef.current.currentSrc)

    audioRef.current.currentTime = 0
  }

  const repeatTrack = () => {
    audioRef.loop = () => setRepeat(!repeat)
    console.log(repeat)
  }

  const shuffleTrack = () => {
    setCurrentTrack(tracks[Math.floor(Math.random() * tracks.length)])

    audioRef.current.currentTime = 0
    console.log(currentTrack.track_file)
  }
  console.log(currentTrack.track_file)

  return (
    <StyledBar>
      <StyledBarContent>
        <audio ref={audioRef} onTimeUpdate={onPlaying}>
          <source src={currentTrack.track_file} type="audio/mpeg" />
        </audio>
        <PlayerProgress onClick={getWidth} ref={progressRef}>
          <div style={{ width: `${currentTrack.progress}%` }} />
        </PlayerProgress>
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          album={currentTrack.album}
          name={currentTrack.name}
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

// "/music/Баста – Ты та….mp3"
