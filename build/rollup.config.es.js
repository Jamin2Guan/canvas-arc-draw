import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'dragArc',
    file: 'dist/drag-arc.esm.js',
    format: 'es'
  },
})

export default config