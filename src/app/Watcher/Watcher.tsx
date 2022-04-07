import React from 'react'
import {useSelector} from 'react-redux'
import {selectPictures} from '../../redux/pictures/selector'

export const Watcher = () => {

  const pictures = useSelector(selectPictures)

  console.log('pics: ', pictures)

  return (
    <div>WATCHER</div>
  )
}
