interface IThemeValues {
  background: string
  buttons: string
  buttonsText: string
  text: string
}

export interface ITitle {
  title: string
  titleHandler: (title: string) => void
}

export interface IThemes {
  theme: IThemeValues
  themeHandler: () => void
}
