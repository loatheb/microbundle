const { readFile } = require('fs')
const { resolve } = require('path')

async function getPackageJSON(cwd) {
  return JSON.parse(await readFile(resolve(cwd, 'package.json'), 'utf8'))
}

module.exports = {
  getPackageJSON,
}
