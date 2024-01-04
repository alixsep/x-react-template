import { type FC } from 'react'
import Button from '@components/Button'

import { useAppDispatch } from '@redux/app/hooks'
import { setTheme } from '@redux/features/theme/themeSlice'

const About: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='about-page'>
      <br />
      <p>Nothing much! Enjoy the template!</p>
      <br />
      <p>Feel free to change the theme:</p>
      <br />
      <Button
        aria-label='Set theme to light'
        onClick={() => dispatch(setTheme('light'))}
      >
        Light
      </Button>
      &nbsp;&nbsp;
      <Button
        aria-label='Set theme to dark'
        onClick={() => dispatch(setTheme('dark'))}
      >
        Dark
      </Button>
    </div>
  )
}

export default About
