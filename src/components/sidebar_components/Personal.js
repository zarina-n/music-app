import { StyledPersonal, Name, Avatar } from './Sidebar.styled'
import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../features/auth/authSlice'

function Personal() {
  const user = useSelector(selectCurrentUser)

  return (
    <StyledPersonal>
      <Name>{user.username}</Name>
      <Avatar src="img/avatar.png" />
    </StyledPersonal>
  )
}

export default Personal
