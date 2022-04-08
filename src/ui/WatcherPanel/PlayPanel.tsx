import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'

//** components
import {SvgFaster, SvgPause, SvgPlay, SvgRefresh} from '../icons'

interface Props {
  playHandler: () => void
}

export const PlayPanel = ({playHandler}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <SvgWrapper onClick={playHandler}>
        <SvgPlay />
      </SvgWrapper>
      <SvgWrapper onClick={playHandler}>
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
  position: fixed;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 24px;
  width: max-content;
  padding: 12px;
  background: ${theme => theme.theme.buttons};
  border-radius: 4px;
  opacity: .1;
  z-index: 10;
  
  &:hover {
    opacity: 1;
  }
  
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
