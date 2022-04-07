import React, {ChangeEvent, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'
import {fileReaderResolver} from '../../helpers'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {setImages} from '../../redux/pictures/slice'
import {selectPictures} from '../../redux/pictures/selector'

//** components
import {Text} from '../../ui/components/Text'
import {UploadInput} from '../../ui/components/Inputs'
import {Preloader} from '../../ui/Preloader'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  const dispatch = useAppDispatch()
  const pictures = useSelector(selectPictures)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    titleContext.titleHandler(pageTitle)
  }, [titleContext, pageTitle])

  const uploadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)

    const loadedFiles = e.target.files

    if (loadedFiles) {
      let fileList = []

      for (let i = 0; i < loadedFiles.length; i++) {
        fileList.push(fileReaderResolver(loadedFiles[i]))
      }

      Promise.all(fileList)
        .then((files) => {
          dispatch(setImages(files))
          setIsLoading(false)
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

      <UploadInput uploadImageHandler={uploadImageHandler} />

      <Preloader images={pictures} loading={isLoading} />
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
