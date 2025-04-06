import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');

  // Set base path for GitHub Pages deployment
  // For GitHub Pages, we need the repository name as the base path
  const isGitHubPages = mode === 'prod' && env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/fe-react-poc-calendar/' : '/';
  
  console.log(`Using base path: ${base} (GitHub Pages: ${isGitHubPages})`); // Debug output

  return {
    // Set base path (important for GitHub Pages deployment)
    base,
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    define: {
      // Expose all env variables to client, but filter out invalid identifiers
      'import.meta.env.MODE': JSON.stringify(mode),
      ...Object.keys(env).reduce((acc, key) => {
        // Check if the key contains invalid characters for JavaScript identifiers
        // This prevents errors with Windows environment variables like ProgramFiles(x86)
        const isValidKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
        if (isValidKey) {
          acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
        }
        return acc;
      }, {}),
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'prod',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
            redux: ['@reduxjs/toolkit', 'react-redux'],
          },
        },
      },
    },
  };
});
