import React, {ChangeEvent, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {ThemeContext} from '../../../App'
import {IThemes} from '../../../assets/interfaces'

interface Props {
  uploadImageHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = ({uploadImageHandler}: Props) => {

  const theme = useContext(ThemeContext)

  return (
    <Wrapper theme={theme.theme}>
      <label htmlFor="upload">choose your files</label>
      <input
        id="upload"
        type="file"
        title="Upload your images"
        multiple
        accept="image/*"
        onChange={(e) => uploadImageHandler(e)}
      />
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
    font-family: 'IndieFlower', sans-serif;
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
