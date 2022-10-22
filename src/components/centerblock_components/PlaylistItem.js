import {
  Title,
  TitleImage,
  TitleText,
  Author,
  Album,
  SongTime,
  PlaylistItemContainer,
} from './Centerblock.styled'

import Like from '../../assets/Like'
import Note from '../../assets/Note'
import { getTrackData } from '../../features/track/trackSlice'
import { useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'

function PlaylistItem({ playlistData }) {
  const dispatch = useDispatch()
  const [likedId, setLikedId] = useState(0)

  function convertToMinutes(value) {
    return Math.floor(value / 60) + ':' + (value % 60 ? value % 60 : '00')
  }

  const getTrack = (
    name,
    id,
    author,
    album,
    duration_in_seconds,
    track_file
  ) => {
    dispatch(
      getTrackData({
        name,
        id,
        author,
        album,
        duration_in_seconds,
        track_file,
      })
    )
    // console.log(id, name)
  }

  const likeToggler = useCallback(
    (id) => {
      setLikedId((prevId) => (prevId === id ? null : id))
      // console.log(likedId)
      // console.log(id)
    },
    [setLikedId]
  )

  return (
    <>
      {playlistData.map(
        ({
          name,
          id,
          description,
          author,
          album,
          duration_in_seconds,
          track_file,
        }) => (
          <PlaylistItemContainer key={id} id={id}>
            <div>
              <Title>
                <TitleImage
                  onClick={() =>
                    getTrack(
                      name,
                      id,
                      author,
                      album,
                      duration_in_seconds,
                      track_file
                    )
                  }
                >
                  <Note alt="music-icon" />
                </TitleImage>

                <TitleText>
                  {name}
                  <span>{description}</span>
                </TitleText>
              </Title>

              <Author>{author}</Author>

              <Album>{album}</Album>

              <SongTime likedId={likedId} id={id}>
                <Like onClick={() => likeToggler(id)} />

                <span>{convertToMinutes(duration_in_seconds)}</span>
              </SongTime>
            </div>
          </PlaylistItemContainer>
        )
      )}
    </>
  )
}

export default PlaylistItem
