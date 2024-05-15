import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults, coverageConfigDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            coverage: {
                reportsDirectory: './__tests__/coverage',
                reporter: ['text', 'json', 'html'],
                exclude: [...coverageConfigDefaults.exclude, '**/i18n.ts', '**/models/*']
            },
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url))
        }
    })
);
