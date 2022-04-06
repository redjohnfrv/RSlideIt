import React, {ChangeEvent, useContext} from 'react'
import styled from 'styled-components'

//** utils
import {IThemes, ThemeContext} from '../../../App'

interface Props {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = ({handleImageChange}: Props) => {

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
        onChange={(e) => handleImageChange(e)}
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
  }
`
