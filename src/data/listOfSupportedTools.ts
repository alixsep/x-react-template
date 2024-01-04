import { toKebabCase } from '@utils'

export type supportedToolType = {
  name: string
  className: string
  link: string
}

const listOfSupportedTools: supportedToolType[] = [
  { name: 'Vite', link: 'https://vitejs.dev/' },
  { name: 'Typescript', link: 'https://www.typescriptlang.org/' },
  { name: 'SASS', link: 'https://sass-lang.com/' },
  { name: 'React Redux', link: 'https://react-redux.js.org/' },
  { name: 'React', link: 'https://react.dev/' },
  { name: 'Cypress', link: 'https://www.cypress.io/' },
  { name: 'Vitest', link: 'https://vitest.dev/' },
  { name: 'React Router', link: 'https://reactrouter.com/' },
  { name: 'PWA', link: 'https://vite-pwa-org.netlify.app/' },
].map((tool) => ({ ...tool, className: toKebabCase(tool.name) }))

export default listOfSupportedTools
