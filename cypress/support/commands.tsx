/// <reference types="cypress" />
// ***********************************************
// This example commands.tsx shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { mount } from 'cypress/react18'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '@redux/app/store'
import ThemeProvider from '@themes/ThemeProvider'

Cypress.Commands.add('mount', (component, options = {}) => {
  const {
    routerProps = { initialEntries: ['/'] },
    reduxStore = store,
    ...mountOptions
  } = options

  const wrapped = (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <MemoryRouter {...routerProps}>{component}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  )

  return mount(wrapped, mountOptions)
})

import { type MountOptions, type MountReturn } from 'cypress/react18'
import { type MemoryRouterProps } from 'react-router-dom'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type RootState } from '@redux/app/store'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps } & {
          reduxStore?: EnhancedStore<RootState>
        },
      ): Cypress.Chainable<MountReturn>
    }
  }
}
