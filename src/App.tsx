// Import styles in the correct order.
import 'the-new-css-reset/css/reset.css'
import './App.scss'

// Import other things.
import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@redux/app/store'
import router from './router/browserRouter'
import ThemeProvider from '@themes/ThemeProvider'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
