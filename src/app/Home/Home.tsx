import React, {useContext, useEffect} from 'react'

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
  }, [])

  return (
    <div>
      <Text>content</Text>
    </div>
  )
}
