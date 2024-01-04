import { type FC } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

interface RouterError extends Error {}

type objectErrorType =
  | {
      message?: string
      status?: number
    }
  | RouterError

const isRouterError = (object: objectErrorType): object is RouterError => {
  return 'message' in object
}

const errorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error != undefined && isRouterError(error)) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.error(error)
    return 'Unknown error'
  }
}

const Err: FC = () => {
  const error = useRouteError()

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </div>
  )
}

export default Err
