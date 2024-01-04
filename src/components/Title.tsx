import { type FC } from 'react'

import './Title.scss'

type TitleType = {
  text: string
}

const Title: FC<TitleType> = ({ text }) => {
  return <h1 className='title'>{text}</h1>
}

export default Title
