import React, {ChangeEvent, useCallback, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'

//** utils
import {TitleContext} from '../../App'
import {pageTitles} from '../../assets/constants'
import {fileReaderResolver} from '../../helpers'
import {useIndexedDBStore} from 'use-indexeddb'
import {v4 as uuid} from 'uuid'
import {IPicture} from '../../assets/interfaces'
import {DBName} from '../../indexedDB/config'

//** components
import {Text} from '../../ui/components/Text'
import {UploadInput} from '../../ui/components/Inputs'
import {Preloader} from '../../ui/Preloader'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  const [pics, setPics] = useState<IPicture[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {add, getAll, deleteAll} = useIndexedDBStore(DBName)
  const pictures: IPicture[] = []

  /** get pictures from indexedDB **/
  const gettingPics = useCallback(() => {
    getAll()
      .then(res => res.forEach((item) => {
        pictures.push(item as IPicture)
        setPics(pictures)
      }))
      .then(() => setIsLoading(false))
  }, [getAll])

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
          files.forEach((item: string) => {
            /** add pictures to indexedDB **/
            add({id: uuid(), pic: item})
              .then(() => console.log('adding success!'))
              .catch(() => console.log('adding error ...'))
          })
        })
        .then(() => gettingPics())
    }
  }

  const clearPreview = () => {
    setIsLoading(true)
    deleteAll()
      .then(() => setPics([]))
      .then(() => setIsLoading(false))
  }

  /** clear indexedDB on first load **/
  useEffect(() => {
    clearPreview()
  }, [])

  return (
    <Wrapper>
      <Description>
        <Text>
          If you want to start viewing your favorite images, you need to download them and choose the
          viewing mode that suits you. Also you can choose dark or light theme for viewing. Enjoy!
        </Text>
      </Description>

      <UploadInput
        uploadImageHandler={uploadImageHandler}
        clearPreview={clearPreview}
      />

      <Preloader images={pics} loading={isLoading} />
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
