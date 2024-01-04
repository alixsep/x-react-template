<h1 align="center">X-REACT-TEMPLATE 🔮</h1>
<div align="center">
  A robust template for building modern web applications using <b>Vite</b>, <b>React</b>, <b>Redux</b>, <b>TypeScript</b>, <b>SASS</b>, <b>Vitest</b>, and <b>Cypress</b>. Minimal, tested, carefully configured, and ready for your next project!
</div>
<br />
<p align="center">
  <a href="#features-✨">Features</a> |
  <a href="#getting-started-🚀">Getting Started</a> |
  <a href="#scripts">Scripts</a> |
  <a href="#contributing">Contributing</a> |
  <a href="#credits">Credits</a>
</p>

![Banner Image](./images/banner.webp)

## Features ✨

- **Clean and Minimal**: Easy to understand. No bloat or unnecessarily complex configuration, and practical folder structure.
- **Fast and Up-to-date**: [Vite 5](https://vitejs.dev/) with [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for [React 18](https://react.dev/) + [Typescript](https://www.typescriptlang.org/).
- **Packed**: [React Router 6](https://reactrouter.com/), [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths), [react-redux](https://react-redux.js.org/), and [SASS](https://sass-lang.com/) pre-configured.
- **Full PWA Support**: [Vite PWA](https://vite-pwa-org.netlify.app/) pre-configured with [17/17 Lighthouse score](https://web.dev/pwa-checklist/) and automatic asset generator.
- **Full Test Support**: [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for unit and integration, and [Cypress](https://www.cypress.io/) for component and E2E tests.
- **Consistent**: [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/) pre-configured for formatting code, and [Commitizen](https://github.com/commitizen/cz-cli) for git commits.

## Getting Started 🚀

Here is the steps to get you ready to go:

1. Clone this repository to your local machine and remove the `.git/` directory so you next initialize and configure git properly based on your requirements. Do not forget to install husky by running the `prepare` command.
2. Install npm packages using your preferred node package manager. This template defaults to using `pnpm`, which we highly recommend, but you can also use `npm` or `yarn` if you prefer.
3. Start the development server with `pnpm dev` and open [http://localhost:5000](http://localhost:5000) with your browser to view your application. (listening port is editable in `vite.config.ts`.)
4. Remove Unnecessary files, or edit them, based on your needs:
   - Update `package.json`.
   - Edit the `LICENSE` file.
   - Update `README.md`. (The `images/` directory includes images for `README.md`. You can modify or delete it.)
   - Replace `public/icon.svg` with your own icon and run `generate-pwa-assets` to generate pwa assets.
   - Update `theme_color` and `background_color` in `pwa.config.ts`.
   - Update theme color, title and description in `index.html` head (Make sure the theme color is consistent with the one in `pwa.config.ts`)
   - Customize the code in `src/` and `cypress/` directories.

## Scripts

- `pnpm dev`: Start the development server with HMR.
- `pnpm build`: Build for production. Generated files will be inside `dist/` directory.
- `pnpm prepare`: Enable Git hooks.
- `pnpm preview`: Locally preview the production build.
- `pnpm test`: Run unit and integration tests with vitest.
- `pnpm test:ci`: Run all unit and integration tests in CI mode.
- `pnpm test:e2e`: Run all E2E tests with the Cypress Test Runner.
- `pnpm test:e2e:ci`: Run all E2E tests in CI mode.
- `pnpm test:e2e:headless`: Run all E2E tests headlessly.
- `pnpm format`: Format code with Prettier.
- `pnpm lint`: Run TypeScript, ESLint and Stylelint.
- `pnpm validate`: Run `lint`, `test:ci` and `test:e2e:ci`.
- `pnpm generate-pwa-assets`: Generate PWA assets from `public/icon.svg`.

## Contributing

We welcome contributions! If you find any issues or have improvements to suggest, feel free to open a pull request.

### To-dos:

- Add support for `.sass` (preprocessorOptions, linting and styling).
- Add support for GitHub actions.
- Add coverage for testing.
- Add support for Cucumber.
- Check if there is a better way to implement theming.
- _...other improvements and bug fixes?_

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- This template is heavily inspired by [Vitamin](https://github.com/wtchnm/Vitamin) by [@wtchnm](https://github.com/wtchnm/Vitamin).
- Banner and icon generated by [Leonardo AI](https://leonardo.ai/).

Made with ♡ by [Alixsep](https://github.com/alixsep)