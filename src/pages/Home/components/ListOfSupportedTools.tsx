import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { type supportedToolType } from '@data'

const images = import.meta.glob(`../../../assets/*.svg`, {
  eager: true,
  as: 'url',
})

import './ListOfSupportedTools.scss'

type ListOfSupportedToolsType = {
  listOfSupportedTools: supportedToolType[]
}

const ListOfSupportedTools: FC<ListOfSupportedToolsType> = ({
  listOfSupportedTools,
}) => {
  return (
    <div className='list-of-supported-tools'>
      {listOfSupportedTools.map(({ name, className }: supportedToolType) => {
        const src = images[`../../../assets/${className}.svg`]
        return (
          <Link key={className} to={className}>
            <img
              src={src}
              className={`${className} logo`}
              alt={`${name} logo`}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default ListOfSupportedTools
