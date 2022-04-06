import React, {ChangeEvent, useContext, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'
import {fileReaderResolver} from '../../helpers'
import {useAppDispatch} from '../../hooks/useAppDispatch'

//** components
import {Text} from '../../ui/components/Text'
import {UploadInput} from '../../ui/components/Inputs'
import {Preloader} from '../../ui/Preloader'
import {setImages} from '../../redux/pictures/slice'
import {selectPictures} from '../../redux/pictures/selector'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  const dispatch = useAppDispatch()
  const pictures = useSelector(selectPictures)

  useEffect(() => {
    titleContext.titleHandler(pageTitle)
  }, [titleContext, pageTitle])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFiles = e.target.files

    if (loadedFiles) {
      let fileList = []

      for (let i = 0; i < loadedFiles.length; i++) {
        fileList.push(fileReaderResolver(loadedFiles[i]))
      }

      Promise.all(fileList)
        .then((files) => {
          dispatch(setImages(files))
        })
    }
  }

  return (
    <Wrapper>
      <Description>
        <Text>
          If you want to start viewing your favorite images, you need to download them and choose the
          viewing mode that suits you. Also you can choose dark or light theme for viewing. Enjoy!
        </Text>
      </Description>

      <UploadInput handleImageChange={handleImageChange} />

      <Preloader images={pictures} />
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Description = styled.div`
  width: 100%;
  height: auto;
  padding: 0 96px 24px 0;
  border-radius: 12px;
`
