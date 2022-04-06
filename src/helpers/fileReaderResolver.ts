export const fileReaderResolver = (file: File): Promise<string> => new Promise((resolve) => {
  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    resolve(fileReader.result as string)
  }

  fileReader.readAsDataURL(file)
})
