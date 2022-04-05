import React, {ChangeEvent, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'

//** components
import {Text} from '../../ui/components/Text'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  useEffect(() => {
    titleContext.titleHandler(pageTitle)
  }, [titleContext, pageTitle])

  const [dataUrl, setDataUrl] = useState<string>()

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFiles = e.target.files![0]
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
      setDataUrl(fileReader.result as string)
    }

    fileReader.readAsDataURL(loadedFiles)
  }



  return (
    <Wrapper>
      <Text>content</Text><br /><br /><br />
      <input type="file" onChange={(e) => handleImageChange(e)} />
      <img src={dataUrl} alt={dataUrl} />
    </Wrapper>
  )
}

const Wrapper = styled.section``
