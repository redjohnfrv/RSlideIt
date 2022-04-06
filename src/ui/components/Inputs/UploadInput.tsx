import React, {ChangeEvent, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../../App'
import {IThemes} from '../../../assets/interfaces'

//** components
import {Broom} from '../../icons/Broom'
import {useAppDispatch} from '../../../hooks/useAppDispatch'
import {clearImages} from '../../../redux/pictures/slice'

interface Props {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = ({handleImageChange}: Props) => {

  const theme = useContext(ThemeContext)
  const dispatch = useAppDispatch()

  const clearPreview = () => {
    dispatch(clearImages())
  }

  return (
    <Wrapper theme={theme.theme}>
      <label htmlFor="upload">choose your files</label>
      <input
        id="upload"
        type="file"
        title="Upload your images"
        multiple
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
      />
      <ClearPreview theme={theme.theme} onClick={clearPreview}>
        <Broom />
      </ClearPreview>
    </Wrapper>
  )
}

const Wrapper = styled.div<{theme: IThemes}>`
  position: relative;
  width: max-content;
  height: 36px;
  
  & input[type='file'] {
    color: transparent;
    opacity: 0;
    pointer-events: none;
  }
  
  & label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 36px;
    text-align: center;
    color: ${theme => theme.theme.buttonsText};
    background: ${theme => theme.theme.buttons};
    border-radius: 4px;
    cursor: pointer;
    opacity: .9;
    
    &:hover {
      opacity: 1;
    }
  }
`
const ClearPreview = styled.div<{theme: IThemes}>`
  position: absolute;
  top: -7px;
  right: -55px;
  width: 45px;
  height: 45px;
  
  cursor: pointer;
  
  & svg {
    fill: ${theme => theme.theme.buttons};
    opacity: .8;
    
    &:hover {
      opacity: 1;
    }
  }
`
