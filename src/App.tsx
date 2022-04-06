import React, {createContext, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//** components
import {MainLayout} from './ui/MainLayout'
import {Home} from './app/Home'
import {Watcher} from './app/Watcher'

//** utils
import {routes} from './assets/constants'
import {IThemes, ITitle} from './assets/interfaces'
import {themes} from './assets/themes'

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
          <BrowserRouter>
            <Routes>
              <Route path={routes.ROOT} element={<Home />} />
              <Route path={routes.WATCHER} element={<Watcher />} />
            </Routes>
          </BrowserRouter>
        </MainLayout>
      </TitleProvider>
    </ThemeProvider>
  )
}

export default App
