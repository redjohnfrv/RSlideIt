import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'

//** components
import {SvgFaster, SvgPause, SvgPlay, SvgRefresh} from '../icons'

export const PlayPanel = () => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <SvgWrapper>
        <SvgPlay />
      </SvgWrapper>
      <SvgWrapper>
        <SvgPause />
      </SvgWrapper>
      <SvgWrapper>
        <SvgFaster />
      </SvgWrapper>
      <SvgWrapper>
        <SvgRefresh />
      </SvgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  padding: 12px;
  background: ${theme => theme.theme.buttons};
  border-radius: 4px;
  
  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.buttonsText};
  }
`
const SvgWrapper = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    border: 1px solid white;
    padding: 4px;
  }
`
