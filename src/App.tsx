import React, {createContext, useState} from 'react'
import {themes} from './assets/themes'

//** components
import {MainLayout} from './ui/MainLayout'
import {Home} from './app/Home'

interface IThemeValues {
  background: string
  buttons: string
  buttonsText: string
  text: string
}

export interface IThemes {
  theme: IThemeValues
  themeHandler: () => void
}

interface ITitle {
  title: string
  titleHandler: (title: string) => void
}

export const ThemeContext =
  createContext<IThemes>({theme: themes.light, themeHandler: () => null})

export const TitleContext =
  createContext<ITitle>({title: 'R SLIDE IT', titleHandler: () => ''})

function App() {

  const {Provider: ThemeProvider} = ThemeContext
  const {Provider: TitleProvider} = TitleContext
  const [themeIsLight, setTheme] = useState(true)
  const [titlePage, setTitle] = useState('R SLIDE IT')

  const titleHandler = (title: string) => {
    setTitle(title)
  }

  const themeHandler = () => {
    themeIsLight
      ? setTheme(false)
      : setTheme(true)

  }

  return (
    <ThemeProvider value={{theme: themeIsLight ? themes.light : themes.dark, themeHandler}}>
      <TitleProvider value={{title: titlePage, titleHandler}}>
        <MainLayout title={titlePage}>
          <Home />
        </MainLayout>
      </TitleProvider>
    </ThemeProvider>
  )
}

export default App
