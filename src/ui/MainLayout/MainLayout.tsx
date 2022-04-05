import React, {ReactNode} from 'react'

//** components
import {Container} from '../components/Container'
import {Header} from '../Header'

interface Props {
  children: ReactNode
  title: string
}

export const MainLayout = ({children, title}: Props) => {
  return (
    <Container>
      <Header title={title} />
      {children}
    </Container>
  )
}
