import React, {ReactNode, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../../App'
import {IThemes} from '../../../assets/interfaces'

interface Props {
  children: ReactNode
}

export const Container = ({children}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{theme: IThemes}>`
  max-width: 1900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  background: ${theme => theme.theme.background};
`
