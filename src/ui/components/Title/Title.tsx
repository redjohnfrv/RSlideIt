import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {IThemes, ThemeContext} from '../../../App'

interface Props {
  title: string
}

export const Title = ({title}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <h1>{title}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div<{theme: IThemes}>`
  padding: 0 0 48px 0;
  
  & h1 {
    font-size: 36px;
    color: ${theme => theme.theme.text}
  }
`
