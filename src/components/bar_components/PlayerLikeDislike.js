import { LikeDislikeDiv, LikeContainer, DislikeContainer } from './Bar.styled'
import {
  setFavoriteTrackInsidePlayer,
  deleteFavoriteTrackInsidePlayer,
} from '../../features/track/trackSlice'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../features/track/trackApiSlice'
import Like from '../../assets/Like'
import Dislike from '../../assets/Dislike'

function PlayerLikeDislike({ currentTrack }) {
  const dispatch = useDispatch()
  const [addTrack] = useAddFavoriteTrackMutation()
  const [deleteTrack] = useDeleteFavoriteTrackMutation()
  const tracks = useSelector((state) => state.track.tracks)

  const [favorite, setFavorite] = useState(currentTrack?.favorite)

  useEffect(() => {
    tracks?.filter((track) =>
      track.id === currentTrack?.id ? setFavorite(track.favorite) : ''
    )
  }, [tracks, currentTrack?.id])

  const addFavoriteTrack = (id) => {
    addTrack(id)
    dispatch(setFavoriteTrackInsidePlayer(id))
  }

  const deleteFavoriteTrack = (id) => {
    deleteTrack(id)
    dispatch(deleteFavoriteTrackInsidePlayer(id))
  }

  return (
    <LikeDislikeDiv>
      <LikeContainer favorite={favorite}>
        <Like alt="like" onClick={() => addFavoriteTrack(currentTrack?.id)} />
      </LikeContainer>
      <DislikeContainer favorite={favorite}>
        <Dislike
          alt="dislike"
          onClick={() => deleteFavoriteTrack(currentTrack?.id)}
        />
      </DislikeContainer>
    </LikeDislikeDiv>
  )
}

export default PlayerLikeDislike
