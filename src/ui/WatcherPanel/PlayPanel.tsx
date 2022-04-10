import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {fasterPlayingSpeed} from '../SwiperContainer/SwiperContainer'

//** components
import {SvgFaster, SvgPause, SvgPlay, SvgRefresh} from '../icons'

interface Props {
  playHandler: () => void
  speedHandler: () => void
  returnToStart: () => void
  isPlaying: boolean
  playingSpeed: number
}

export const PlayPanel = (
  {
    playHandler,
    isPlaying,
    speedHandler,
    playingSpeed,
    returnToStart
  }: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <SvgWrapper onClick={playHandler} disable={isPlaying}>
        <SvgPlay />
      </SvgWrapper>
      <SvgWrapper onClick={playHandler} disable={!isPlaying}>
        <SvgPause />
      </SvgWrapper>
      <SvgWrapper onClick={speedHandler} bold={playingSpeed === fasterPlayingSpeed}>
        <SvgFaster />
      </SvgWrapper>
      <SvgWrapper onClick={returnToStart}>
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
const SvgWrapper = styled.div<{disable?: boolean, bold?: boolean}>`
  width: 36px;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  pointer-events: unset;

  ${disable => disable.disable &&
    {opacity: .4, pointerEvents: 'none'}
  }
  
  & svg {
    stroke: ${bold => bold.bold ? 'white' : 'none'};
  }
  
  &:hover {
    border: 1px solid white;
    padding: 4px;
  }
`
