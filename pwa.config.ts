import { type VitePWAOptions } from 'vite-plugin-pwa'

/* It's recommended not to edit the `icons` value,
 * but only theme_color and background_color to fit your app's color theme.
 * If you want to edit the `icons` value, make sure you delete every pre-generated
 * icon in the public/ folder and run the `generate-pwa-assets` script.
 */
const pwaConfig: Partial<VitePWAOptions> = {
  manifest: {
    theme_color: '#242325',
    background_color: '#242325',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  registerType: 'autoUpdate',
}

export default pwaConfig
