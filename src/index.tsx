import {createRoot} from 'react-dom/client'
import {store} from './redux/store'
import {Provider} from 'react-redux'

import './index.scss'
import App from './App'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
