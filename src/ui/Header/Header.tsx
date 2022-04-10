import React, {useContext, useState} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {routes, themeNames} from '../../assets/constants'
import {IThemes} from '../../assets/interfaces'
import {NavLink, useLocation} from 'react-router-dom'

//** components
import {Title} from '../components/Title'
import {SvgHome} from '../icons'

interface Props {
  title: string
}

export const Header = ({title}: Props) => {

  const theme = useContext(ThemeContext)
  const {pathname} = useLocation()
  const [themeName, setThemeName] = useState(themeNames.LIGHT)

  const themeSwitcherHandler = () => {
    themeName === themeNames.DARK
      ? setThemeName(themeNames.LIGHT)
      : setThemeName(themeNames.DARK)

    theme.themeHandler()
  }

  return (
    <Wrapper>
      <Title title={title} />
      <RightSide theme={theme.theme}>
        {pathname === routes.WATCHER &&
          <NavLink to={routes.ROOT}>
            <SvgHome />
          </NavLink>
        }
        <ThemeHandler
          onClick={themeSwitcherHandler}
          theme={theme.theme}
        >
          {themeName}
        </ThemeHandler>
      </RightSide>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const RightSide = styled.div<{theme: IThemes}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  width: max-content;
  
  & svg {
    position: relative;
    top: 2px;
    width: 32px;
    height: 32px;
    fill: ${theme => theme.theme.buttons};
    opacity: .6;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
    } 
  }
`

const ThemeHandler = styled.button<{theme: IThemes}>`
  font-family: 'IndieFlower', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 32px;
  font-size: 16px;
  background: ${theme => theme.theme.buttons};
  color: ${theme => theme.theme.buttonsText};
  border: none;
  border-radius: 4px;
  opacity: .9;
  
  &:hover {
    opacity: 1;
  }
`
