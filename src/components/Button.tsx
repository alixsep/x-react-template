import { type FC, type ComponentPropsWithoutRef } from 'react'

import './Button.scss'

type ButtonType = {
  btnStyle?: string
} & ComponentPropsWithoutRef<'button'>

const Button: FC<ButtonType> = ({ className, ...props }) => {
  return <button className={`custom-button ${className}`} {...props} />
}

export default Button
