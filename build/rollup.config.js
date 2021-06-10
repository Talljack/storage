
// babel解析相关
const babel = require('rollup-plugin-babel')
// path路径相关
const nodeResolve = require('rollup-plugin-node-resolve')
// vue相关的插件
// const vue from 'rollup-plugin-vue'
const uglify = require('rollup-plugin-uglify').uglify
// 解析cjs模块
const cjs =  require('@rollup/plugin-commonjs')
// 自定义变量的替换
const replace = require('@rollup/plugin-replace')
// eslint相关的插件
const eslint = require('@rollup/plugin-eslint')
const version = process.env.VERSION || require('../package.json').version
const path = require('path')
const banner =
  `/**
 * better-storage v${version}
 * (c) ${new Date().getFullYear()} caoyugang_1
 */`
 const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const _resolve = _path => path.resolve(__dirname, '../', _path)
const configs = {
  umdDev: {
    input: _resolve('src/index.ts'),
    file: _resolve('dist/storage.js'),
    format: 'umd',
    env: 'development'
  },
  umdProd: {
    input: _resolve('src/index.ts'),
    file: _resolve('dist/storage.min.js'),
    format: 'umd',
    env: 'production'
  },
  esm: {
    input: _resolve('src/index.ts'),
    file: _resolve('dist/storage.esm.js'),
    format: 'es'
  }
}

function genConfig (opts) {
  const config = {
    input: {
      input: opts.input,
    },
    plugins: [
      nodeResolve({
        extensions,
        modulesOnly: true,
        mainFields: ['module', 'main', 'jsnext:main', 'browser']
      }),
      eslint({
        include: ['src/**/*.{js,vue}'],
      }),
      replace({
        __VERSION__: version
      }),
      cjs(),
      uglify(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        extensions
      })
    ],
    watch: {
      include: 'src/**',
    },
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'Storage'
    }
  }

  if (opts.env) {
    config.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}

function getAllConfig(obj, fn) {
  const res = {}
  const keys = Object.keys(obj)
  keys.forEach(key => {
    res[key] = fn(obj[key])
  })
  return res
}

module.exports = getAllConfig(configs, genConfig)