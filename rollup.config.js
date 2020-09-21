import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import sizes from 'rollup-plugin-sizes'
import del from 'rollup-plugin-delete'
import rollupPluginTsPaths from 'rollup-plugin-ts-paths'
import less from 'rollup-plugin-less'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
  },
  external: ['react', 'react-dom'],
  plugins: [
    del({ targets: 'lib/*' }),
    less(),
    rollupPluginTsPaths(),
    typescript(),
    nodeResolve(),
    commonjs(),
    eslint({
      fix: true,
    }),
    terser(),
    sizes(),
  ],
}