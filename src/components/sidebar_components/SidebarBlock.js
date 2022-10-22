import {
  StyledSidebarBlock,
  SidebarList,
  SidebarListItem,
  SidebarLink,
  SidebarImg,
} from './Sidebar.styled'
import DAILY_PLAYLIST from '../../dummy-data/daily-playlist-data'
import { useState, useEffect, useContext } from 'react'
import SkeletonDailyplaylist from '../../skeletons/SkeletonDailyplaylist'
import { ThemeContext } from '../../App'

function SidebarBlock() {
  return (
    <StyledSidebarBlock>
      <SidebarItem />
    </StyledSidebarBlock>
  )
}

export default SidebarBlock

function SidebarItem() {
  const { darkTheme } = useContext(ThemeContext)

  const [sidebarPlaylist, setSidebarPlaylist] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarPlaylist(DAILY_PLAYLIST)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarList>
      {sidebarPlaylist &&
        sidebarPlaylist.map(({ name, imgSrc, alt, id }) => (
          <SidebarListItem key={id}>
            <SidebarLink to={`/compilations/${id}`}>
              <SidebarImg src={imgSrc} alt={alt}></SidebarImg>
            </SidebarLink>
          </SidebarListItem>
        ))}

      {!sidebarPlaylist &&
        Array.from({ length: 3 }).map((item, index) => (
          <SkeletonDailyplaylist
            key={`${index} + 1`}
            theme={darkTheme ? 'dark' : 'light'}
          />
        ))}
    </SidebarList>
  )
}
