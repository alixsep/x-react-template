import Home from '@pages/Home'
import Tool from '@pages/Tool'
import About from '@pages/About'
import Err from '@pages/Err'
import Navbar from '@components/Navbar'

/**
 * Configuration for react-router-dom.
 */
const routerConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/:tool',
    element: <Tool />,
  },
].map((route) => ({
  ...route,
  element: (
    <>
      <Navbar />
      {route.element}
    </>
  ),
  errorElement: <Err />,
}))

export default routerConfig
