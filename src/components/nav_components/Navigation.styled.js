import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNav = styled.nav`
  grid-area: 1 / 1 / 2 / 2;
  width: 244px;
  background-color: ${({ theme }) => theme.colors.navBackGrColor};
  padding: 20px 0 20px 36px;
`

export const Logo = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
  background-color: transparent;
  margin-bottom: 20px;
`

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.burgerSpanColor};
    transform-origin: 1px;
    transition: all 0.3s linear;
    display: inline-block;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(30deg) ' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'scale(0.1)' : '')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-30deg)' : 'rotate(0)')};
    }
  }
`

export const Menu = styled.div`
  display: block;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: visibility 0.3s linear;

  ul {
    padding: 18px 0 10px 0;
  }

  ul li {
    padding: 5px 0;
    margin-bottom: 16px;
  }
`

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &.active {
    border-bottom: 1px solid white;
  }
`

export const ThemeButton = styled.div`
  cursor: pointer;
`
