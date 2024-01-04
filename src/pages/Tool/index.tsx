import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import Title from '@components/Title'
import {
  descriptionOfSupportedTools,
  listOfSupportedTools,
  type supportedToolType,
} from '@data'

const images = import.meta.glob(`../../assets/*.svg`, {
  eager: true,
  as: 'url',
})

import './Tool.scss'

const Tool: FC = () => {
  const { tool } = useParams()

  const { link, name, className } = listOfSupportedTools.find(
    (x) => x.className === tool,
  ) as supportedToolType

  const src = images[`../../assets/${className}.svg`]

  return (
    <div className='tool-page'>
      <a href={link} target='_blank'>
        <img src={src} className={`${className} logo`} alt={`${name} logo`} />
      </a>
      <Title text={name} />
      <p>{descriptionOfSupportedTools[className]}</p>
    </div>
  )
}

export default Tool
