import React, {useContext} from 'react'
import styled, {keyframes} from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {IThemes} from '../../assets/interfaces'

//** components
import {SvgLoader} from '../icons'

export const Loader = () => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <SvgLoader />
    </Wrapper>
  )
}

const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div<{theme: IThemes}>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 56px;
  height: 56px;

  animation: 1s ${loaderAnimation} infinite;
  
  & svg {
    fill: ${theme => theme.theme.buttons};
  }
`
