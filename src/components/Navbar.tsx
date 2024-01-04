import { type FC } from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import Button from '@components/Button'
import { Back_SVG, Github_SVG, Home_SVG } from '@svg'

import './Navbar.scss'

const Navbar: FC = () => {
  const { pathname } = useLocation()
  const q = pathname === '/'

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <NavLink to='/' className='icon center'>
          {q ? <Home_SVG /> : <Back_SVG />}
        </NavLink>
        <div className='button-alike center'>{q ? 'Homepage' : pathname}</div>
        <NavLink to='/about'>
          <Button>About</Button>
        </NavLink>
      </div>
      <div className='navbar-right'>
        <a
          className='outer-link center'
          href='https://github.com/alixsep/x-react-template'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github_SVG />
        </a>
      </div>
    </div>
  )
}

export default Navbar
