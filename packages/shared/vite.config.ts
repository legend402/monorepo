import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'es',
          preserveModulesRoot: 'src',
        },
      ],
    },
  }
})