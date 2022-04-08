import React, {useCallback, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {useIndexedDBStore} from 'use-indexeddb'

//** utils
import {IPicture} from '../../assets/interfaces'
import {DBName} from '../../indexedDB/config'
import {pageTitles} from '../../assets/constants'
import {TitleContext} from '../../App'

//** components
import {SwiperContainer} from '../../ui/SwiperContainer'

export const Watcher = () => {

  const pageTitle = pageTitles.watcher
  const titleContext = useContext(TitleContext)

  const {getAll} = useIndexedDBStore(DBName)
  const [pics, setPics] = useState<IPicture[]>([])

  const pictures: IPicture[] = []

  /** get pictures from indexedDB **/
  const gettingPics = useCallback(() => {
    getAll()
      .then(res => res.forEach((item) => {
        pictures.push(item as IPicture)
        setPics(pictures)
      }))
  }, [getAll])

  /** get pics from indexedDB on render **/
  useEffect(() => {
    gettingPics()
  }, [])

  /** set page title **/
  useEffect(() => {
    titleContext.titleHandler(pageTitle)
  }, [titleContext, pageTitle])

  return (
    <Wrapper>
      <SwiperContainer pics={pics} />
    </Wrapper>
  )
}

const Wrapper = styled.section``
