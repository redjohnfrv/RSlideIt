import React, {ChangeEvent, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {IThemes} from '../../assets/interfaces'

//** components
import {SvgBroom, SvgWatch} from '../icons'
import {UploadInput} from '../components/Inputs'
import {NavLink} from 'react-router-dom'
import {routes} from '../../assets/constants'

interface Props {
  uploadImageHandler: (e: ChangeEvent<HTMLInputElement>) => void
  clearPreview: () => void
}

export const NavigationMenu = ({uploadImageHandler, clearPreview}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <UploadInput uploadImageHandler={uploadImageHandler} />

      <ClearPreview theme={theme.theme} onClick={clearPreview}>
        <SvgBroom />
      </ClearPreview>

      <WatcherLink theme={theme.theme}>
        <NavLink to={routes.WATCHER}>
          <SvgWatch />
        </NavLink>
      </WatcherLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`
const ClearPreview = styled.div<{theme: IThemes}>`
  width: 36px;
  height: 36px;
  cursor: pointer;
  
  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.buttons};
    opacity: .8;
    
    &:hover {
      opacity: 1;
    }
  }
`
const WatcherLink = styled.div<{theme: IThemes}>`
  width: 36px;
  height: 36px;
  opacity: .8;
  
  &:hover {
    opacity: 1;
  }
  
  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.buttons};
  }
`
