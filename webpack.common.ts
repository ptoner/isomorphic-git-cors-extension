//@ts-nocheck
import "core-js/stable"
import "regenerator-runtime/runtime"
import "reflect-metadata"
const nodeExternals = require('webpack-node-externals')


import path from 'path'
import webpack from 'webpack'


import { CleanWebpackPlugin } from 'clean-webpack-plugin'
const CopyWebpackPlugin = require('copy-webpack-plugin')


const VERSION = JSON.stringify(require("./package.json").version)

let configs = []


export default async () => {

  let plugins = []


 let generalConfig = {
 
  // entry: "./src/index.ts",
  // output: {
  //   libraryTarget: 'umd',
  //   filename: 'background.js',
  //   path: path.resolve(__dirname, 'dist')
  // }

  plugins: [

    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),

    new CopyWebpackPlugin({
      patterns: [
          { from: './src/manifest.json' },
          { from: './src/rules.json' }
      ]
    }),

    new webpack.DefinePlugin({
      VERSION: VERSION
    }),

    ...plugins,

  ]
 }



  configs.push(generalConfig)

  return configs
}


