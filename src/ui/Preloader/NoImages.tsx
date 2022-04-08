import React, {useContext} from 'react'
import styled from 'styled-components'

//** utils
import {colors} from '../../assets/constants'
import {ThemeContext} from '../../App'

//** components
import {Text} from '../components/Text'

export const NoImages = () => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <Content>
        <Text>×</Text>
        <Text>NO IMAGES</Text>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  padding: 24px;
  margin-top: 24px;
  background: ${theme => theme.theme.blockBg};
  border-radius: 4px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  
  & span:first-child {
    width: 96px;
    height: 96px;
    line-height: 96px;
    text-align: center;
    border-radius: 50%;
    font-size: 56px;
    background: white;
    color: ${colors.black};
  }
`
