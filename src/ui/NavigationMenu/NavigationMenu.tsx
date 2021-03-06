import React, {ChangeEvent, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../App'
import {IThemes} from '../../assets/interfaces'
import {routes} from '../../assets/constants'

//** components
import {SvgBroom, SvgWatch} from '../icons'
import {UploadInput} from '../components/Inputs'
import {NavLink} from 'react-router-dom'

interface Props {
  uploadImageHandler: (e: ChangeEvent<HTMLInputElement>) => void
  clearPreview: () => void
  watchDisable: boolean
}

export const NavigationMenu = ({uploadImageHandler, clearPreview, watchDisable}: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <UploadInput uploadImageHandler={uploadImageHandler} />

      <ClearPreview
        theme={theme.theme}
        onClick={clearPreview}
        watchDisable={watchDisable}
      >
        <SvgBroom />
      </ClearPreview>

      <WatcherLink theme={theme.theme} watchDisable={watchDisable}>
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
  
  @media screen and (orientation: portrait) and (max-width: 1024px) {
    justify-content: space-between;
    gap: 0;
  }
`
const ClearPreview = styled.div<{theme: IThemes, watchDisable: boolean}>`
  width: 36px;
  height: 36px;
  cursor: pointer;
  opacity: .8;
  pointer-events: unset;

  ${watchDisable => watchDisable.watchDisable &&
    {opacity: .3, pointerEvents: 'none'}
  }
  
  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.buttons};
  }

  &:hover {
    opacity: 1;
  }
`
const WatcherLink = styled.div<{theme: IThemes, watchDisable: boolean}>`
  width: 36px;
  height: 36px;
  opacity: .8;
  pointer-events: unset;

  ${watchDisable => watchDisable.watchDisable &&
    {opacity: .3, pointerEvents: 'none'}
  }
  
  &:hover {
    opacity: 1;
  }
  
  & svg {
    width: 100%;
    height: auto;
    fill: ${theme => theme.theme.buttons};
  }
`
