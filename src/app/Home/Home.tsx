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
import {Preloader} from '../../ui/Preloader'
import {NavigationMenu} from '../../ui/NavigationMenu'

export const Home = () => {

  const pageTitle = pageTitles.home
  const titleContext = useContext(TitleContext)

  const [pics, setPics] = useState<IPicture[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {add, getAll, deleteAll, deleteByID} = useIndexedDBStore(DBName)
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
              .then(() => console.log('add indexedDB success!'))
              .catch(() => console.log('add indexedDB error ...'))
          })
        })
        .then(() => gettingPics())
    }
  }

  /** delete all records from DB **/
  const clearPreview = () => {
    setIsLoading(true)
    deleteAll()
      .then(() => setPics([]))
      .then(() => setIsLoading(false))
  }

  /** delete record by ID from DB **/
  const deletePicById = (id: string) => {
    deleteByID(id)
      .then(() => {
        setPics(pics.filter(item => item.id !== id))
      })
      .catch(() => console.log('deleteById indexedDB error ...'))
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

      <NavigationMenu
        uploadImageHandler={uploadImageHandler}
        clearPreview={clearPreview}
      />

      <Preloader
        images={pics}
        loading={isLoading}
        deletePicById={deletePicById}
      />
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
