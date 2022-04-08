import React, {useCallback, useContext, useState} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {IPicture, IThemes} from '../../assets/interfaces'

//** components
import {Popup} from '../Popup'
import {Loader} from '../Loader'
import {NoImages} from './NoImages'
import {SvgClose} from '../icons'


interface Props {
  images: IPicture[]
  loading: boolean
  deletePicById: (id: string) => void
}

export const Preloader = ({images, loading, deletePicById}: Props) => {

  const theme = useContext(ThemeContext)

  const [chosenPic, setChosenPic] = useState<IPicture | undefined>(undefined)

  /** switch body scrolling **/
  const clickImageHandler = (image: IPicture | undefined) => {
    if (image) {
      setChosenPic(image)
      document.body.style.overflow = 'hidden'
    } else {
      setChosenPic(undefined)
      document.body.style.overflow = 'auto'
    }
  }

  /** delete pictures **/
  const deleteHandler = useCallback((event: any, id: string) => {
    event.stopPropagation()
    deletePicById(id)
  }, [deletePicById])

  if (loading) return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
  if (!!images.length) {
    return (
      <Wrapper theme={theme.theme}>
        {images.map((image: IPicture) => {
          return (
            <ImagePreview key={image.id} onClick={() => clickImageHandler(image)}>
              <img src={image.pic} alt={image.pic} />

              <DeleteImage
                onClick={(event) => deleteHandler(event, image.id)}
                theme={theme.theme}
              >
                <SvgClose />
              </DeleteImage>

            </ImagePreview>
          )
        })}
        <Popup image={chosenPic} onClick={clickImageHandler} />
      </Wrapper>
    )
  } else {
    return <NoImages />
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
  position: relative;
  height: 300px;
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`
const DeleteImage = styled.div<{theme: IThemes}>`
  box-sizing: border-box;
  position: absolute;
  top: 6px;
  right: 6px;
  width: 50px;
  height: 50px;
  padding: 12.5px;
  border-radius: 50%;
  background: ${theme => theme.theme.background};
  transition: transform .2s ease;

  &:hover {
    transform: translate(-2px, 2px);
  }

  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.text};
  }
`
