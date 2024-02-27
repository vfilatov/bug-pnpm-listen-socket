import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import myMiddleWare from './src/lib/server/myMiddleWare';

export default defineConfig({
	plugins: [
          sveltekit(),
          {
            name: 'myMiddleWare',
            configureServer(server) {
              server.middlewares.use(myMiddleWare);
            }
          }
        ]
});
