import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: '../../tsconfig.json',
    }),
    dts({
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json',
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key];

          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.less/g, '.css'),
          })
        }
      }
    }
  ],
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue', /\.less/],
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ],
    },
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es']
    }
  }
})