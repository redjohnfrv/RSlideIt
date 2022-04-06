import React, {ChangeEvent, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'
import {fileReaderResolver} from '../../helpers'

//** components
import {Text} from '../../ui/components/Text'
import {UploadInput} from '../../ui/components/Inputs'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  useEffect(() => {
    titleContext.titleHandler(pageTitle)
  }, [titleContext, pageTitle])

  const [dataUrls, setDataUrls] = useState<string[]>([])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFiles = e.target.files

    if (loadedFiles) {
      let fileList = []

      for (let i = 0; i < loadedFiles.length; i++) {
        fileList.push(fileReaderResolver(loadedFiles[i]))
      }

      Promise.all(fileList)
        .then((files) => {
          setDataUrls(files)
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

      {dataUrls.length > 0 && dataUrls.map((item: string) => {
        return <img key={item} src={item} alt={item} />
      })}
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
