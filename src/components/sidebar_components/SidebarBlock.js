import {
  StyledSidebarBlock,
  SidebarList,
  SidebarListItem,
  SidebarLink,
  SidebarImg,
} from './Sidebar.styled'
import { useContext } from 'react'
import SkeletonDailyPlaylist from '../../skeletons/SkeletonDailyPlaylist'
import { ThemeContext } from '../../App'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function SidebarBlock() {
  return (
    <StyledSidebarBlock>
      <SidebarItem />
    </StyledSidebarBlock>
  )
}

export default SidebarBlock

function SidebarItem() {
  const { t } = useTranslation('home')
  const { darkTheme } = useContext(ThemeContext)
  const playlistData = useSelector((state) => state.track.playlists)

  const playlists = [t('classic'), t('dance'), t('rock')]

  return (
    <SidebarList>
      {playlistData &&
        playlistData.map(({ imgSrc, alt, id, name }) => (
          <SidebarListItem key={id}>
            <SidebarLink to={`/compilations/${id}`}>
              <SidebarImg src={imgSrc} alt={alt}></SidebarImg>
              <p>{playlists[id - 1]}</p>
            </SidebarLink>
          </SidebarListItem>
        ))}

      {!playlistData &&
        Array.from({ length: 3 }).map((item, index) => (
          <SkeletonDailyPlaylist
            key={`${index} + 1`}
            theme={darkTheme ? 'dark' : 'light'}
          />
        ))}
    </SidebarList>
  )
}
