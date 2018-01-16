const fs = require('fs')
const { resolve } = require('path')
const webpack = require('webpack')
const { getPackageJSON } = require('./utils')

module.exports = async function(opts) {
  const cwd = resolve(process.cwd(), opts.cwd)
  const pkg = await getPackageJSON(cwd)
  const entry = pkg.main || `${pkg.name}.js` || 'index.js'
  return ['umd', 'amd', 'commonjs', 'commonjs2'].map(libraryTarget => {
    return {
      entry,
      output: {
        libraryTarget,
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ }
        ],
      },
    }
  })
}
