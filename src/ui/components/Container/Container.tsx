import React, {ReactNode, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../../App'

interface Props {
  children: ReactNode
}

export const Container = ({children}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper background={theme}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{background: any}>`
  max-width: 1900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  background: ${background => background.background.theme.background};
`
