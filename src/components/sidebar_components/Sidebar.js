import { StyledSidebar } from './Sidebar.styled'
import Personal from './Personal'
import SidebarBlock from './SidebarBlock'

function Sidebar() {
  return (
    <StyledSidebar>
      <Personal />
      <SidebarBlock />
    </StyledSidebar>
  )
}

export default Sidebar
