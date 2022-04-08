import React, {createContext, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexedDBProvider  from 'use-indexeddb'

//** utils
import {routes} from './assets/constants'
import {themes} from './assets/themes'
import {IThemes, ITitle} from './assets/interfaces'
import {idbConfig} from './indexedDB/config'

//** components
import {MainLayout} from './ui/MainLayout'
import {Home} from './app/Home'
import {Watcher} from './app/Watcher'

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
    <IndexedDBProvider config={idbConfig}>
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
    </IndexedDBProvider>
  )
}

export default App
