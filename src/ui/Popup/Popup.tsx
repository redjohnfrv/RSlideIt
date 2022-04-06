import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {IPicture} from '../../redux/pictures/slice'
import {ThemeContext} from '../../App'
import {IThemes} from '../../assets/interfaces'

interface Props {
  image?: IPicture
  onClick: (image: IPicture | undefined) => void
}

export const Popup = ({image, onClick}: Props) => {

  const theme = useContext(ThemeContext)

  if (image) {
    return (
      <>
        <Wrapper onClick={() => onClick(undefined)} theme={theme.theme}>
          <img src={image.pic} alt={image.id} />
        </Wrapper>
        <BodyShadow />
      </>
    )
  }

  return null
}

const Wrapper = styled.div<{theme: IThemes}>`
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  padding: 24px;
  background: ${theme => theme.theme.blockBg};
  border-radius: 4px;
  z-index: 10;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }
`

const BodyShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.59);
  z-index: 1;
`
