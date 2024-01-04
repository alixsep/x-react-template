type StringMap = { [key: string]: string }

const descriptionOfSupportedTools: StringMap = {
  vite: 'Vite is a fast build tool for modern web development. It focuses on speed and efficiency, providing lightning-fast development server and optimized production builds.',
  typescript:
    'TypeScript is a superset of JavaScript that adds static typing to the language. It enhances code quality, maintainability, and developer productivity by catching errors at compile-time.',
  sass: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds features like variables, nesting, and functions to enhance CSS authoring.',
  'react-redux':
    'React Redux is a state management library for React applications. It enables predictable state management, making it easier to manage and share the state across components.',
  react:
    'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them as the application state changes.',
  cypress:
    "Cypress is an end-to-end testing framework for web applications. It provides a fast, reliable, and easy-to-use solution for testing your application's functionality and user interactions.",
  vitest:
    'Vitest is a lightweight and fast test runner for JavaScript and TypeScript projects. It focuses on simplicity and speed, making it suitable for both unit and integration testing.',
  'react-router':
    'React Router is a declarative routing library for React applications. It enables the navigation between different views or components based on the application state.',
  pwa: 'Progressive Web Apps (PWAs) are web applications that offer a native app-like experience on the web. They provide features like offline support, push notifications, and improved performance.',
}

export default descriptionOfSupportedTools
