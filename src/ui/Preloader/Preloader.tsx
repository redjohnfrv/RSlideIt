import React, {useContext} from 'react'
import styled from 'styled-components'

//** components
import {Text} from '../components/Text'

//** utils
import {colors} from '../../assets/constants'
import {ThemeContext} from '../../App'
import {IThemes} from '../../assets/interfaces'


interface Props {
  images: string[]
}

export const Preloader = ({images}: Props) => {

  const theme = useContext(ThemeContext)

  if (images.length > 0) {
    return (
      <Wrapper theme={theme.theme}>
        {images.map((image: string) => {
          return (
            <ImagePreview key={image}>
              <img src={image} alt={image} />
            </ImagePreview>
          )
        })}
      </Wrapper>
    )
  } else {
    return (
      <WrapperNoImages theme={theme.theme}>
        <NoImages>
          <Text>×</Text>
          <Text>NO IMAGES</Text>
        </NoImages>
      </WrapperNoImages>
    )
  }
}

const Wrapper = styled.div<{theme: IThemes}>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  min-height: 50vh;
  padding: 24px;
  margin-top: 24px;
  background: ${theme => theme.theme.blockBg};
  border-radius: 4px;
`

const ImagePreview = styled.div`
  height: 300px;
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`

const WrapperNoImages = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  padding: 24px;
  margin-top: 24px;
  background: ${theme => theme.theme.blockBg};
  border-radius: 4px;
`

const NoImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  
  & span:first-child {
    width: 96px;
    height: 96px;
    line-height: 96px;
    text-align: center;
    border-radius: 50%;
    font-size: 56px;
    background: ${colors.white};
    color: ${colors.black};
  }
`
