import { type FC, type ComponentPropsWithoutRef } from 'react'

import './Input.scss'

type InputType = {
  bo?: number
} & ComponentPropsWithoutRef<'input'>

const Input: FC<InputType> = ({ className, ...props }) => {
  return <input className={`custom-input ${className}`} {...props} />
}

export default Input
