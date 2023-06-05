import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNav = styled.nav`
  grid-area: 1 / 1 / 2 / 2;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.navBackGrColor};
  padding: 20px 0 20px 36px;

  @media (max-width: 920px) {
    width: 170px;
  }

  @media (max-width: 900px) {
    width: 150px;
  }
`

export const Logo = styled.img`
  width: 113px;
  height: 17px;
  color: #181818;
  background-color: transparent;
  margin-bottom: 15px;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100px;
    height: 17px;
  }
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

  &.active {
    color: ${({ theme }) => theme.colors.filterActiveColor};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.filterHoverColor};
  }
`

export const ThemeButton = styled.div`
  cursor: pointer;
`

export const LngButton = styled.button`
  background-color: ${({ theme }) => theme.colors.navBackGrColor};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.filterHoverColor};
  }
`
