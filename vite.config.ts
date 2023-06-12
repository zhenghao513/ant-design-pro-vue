import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/layout'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        { '@vueuse/core': ['useMouse', ['useFetch', 'useMyFetch']], axios: [['default', 'axios']] },
        { from: 'vue-router', imports: ['RouteLocationRaw'], type: true },
      ],
      defaultExportByFilename: false,
      dirs: [],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      resolvers: [],
      injectAtEnd: true,
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
});
