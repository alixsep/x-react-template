import { type FC } from 'react'

import Title from '@components/Title'
import Counter from './components/Counter'
import ListOfSupportedTools from './components/ListOfSupportedTools'
import { listOfSupportedTools } from '@data'

import './Home.scss'

const Home: FC = () => {
  return (
    <div className='home-page'>
      <Title text={'x-react-template'} />
      <p className='read-the-docs'>
        <span>Click on logos to learn more. </span>
        <span>Press buttons to change the counter.</span>
      </p>
      <ListOfSupportedTools listOfSupportedTools={listOfSupportedTools} />
      <Counter />
    </div>
  )
}

export default Home
