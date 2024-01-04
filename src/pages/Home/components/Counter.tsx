import { type FC, useState } from 'react'

import Input from '@components/Input'
import Button from '@components/Button'

import { useAppSelector, useAppDispatch } from '@redux/app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '@redux/features/counter/counterSlice'

import './Counter.scss'

const Counter: FC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className='counter-panel'>
      <div className='counter-display'>
        <Button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -1
        </Button>
        <div className='counter-number center'>Count: {count}</div>
        <Button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +1
        </Button>
      </div>
      <div className='counter-input'>
        <Input
          aria-label='Set increment amount'
          value={incrementAmount}
          placeholder='Input amount here'
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementAsync(incrementValue))
              .then(() => {
                console.log('Success')
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        >
          Add Async
        </Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </div>
    </div>
  )
}

export default Counter
