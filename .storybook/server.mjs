import { storybookPlugin } from '@web/dev-server-storybook';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/',
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  plugins: [storybookPlugin({ type: 'web-components' })]
});
