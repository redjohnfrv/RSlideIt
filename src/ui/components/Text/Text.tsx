import React, {ReactNode, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {IThemes, ThemeContext} from '../../../App'

interface Props {
  children: ReactNode
}

export const Text = ({children}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.span<{theme: IThemes}>`
  display: inline-block;
  font-size: 18px;
  color: ${theme => theme.theme.text}
`
