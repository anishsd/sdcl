/* eslint-env node */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import path from 'path';
import uglify from '@lopatnov/rollup-plugin-uglify';

export default [
  {
    input: './src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      externals({ deps: true }),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      postcss({
        extract: true,
        minimize: true,
        extract: path.resolve('dist/styles/index.css'),
      }),
      uglify(),
    ],
    output: [{ file: pkg.main, format: 'cjs' }],
  },
];
