import React, {useContext, useState} from 'react'
import styled from 'styled-components'

//** components
import {Title} from '../components/Title'

//** utils
import {IThemes, ThemeContext} from '../../App'
import {themeNames} from '../../assets/constants'

interface Props {
  title: string
}

export const Header = ({title}: Props) => {

  const theme = useContext(ThemeContext)
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
      <ThemeHandler
        onClick={themeSwitcherHandler}
        theme={theme.theme}
      >
        {themeName}
      </ThemeHandler>
    </Wrapper>
  )
}



const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const ThemeHandler = styled.button<{theme: IThemes}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 32px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  
  background: ${theme => theme.theme.buttons};
  color: ${theme => theme.theme.buttonsText}
`
