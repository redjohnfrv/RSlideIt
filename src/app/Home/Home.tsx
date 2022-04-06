import React, {ChangeEvent, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'
import {fileReaderResolver} from '../../helpers'

//** components
import {Text} from '../../ui/components/Text'

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
      <Text>content</Text><br /><br /><br />
      <input type="file" multiple onChange={(e) => handleImageChange(e)} />

      {dataUrls.length > 0 && dataUrls.map((item: string) => {
        return <img key={item} src={item} alt={item} />
      })}

    </Wrapper>
  )
}

const Wrapper = styled.section``
