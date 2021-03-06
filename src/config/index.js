
// itreed formatters
const format = itreed.format

const formatters = [
  require('itreed/formatters/blob'),
  require('itreed/formatters/live'),
  require('itreed/formatters/live-button'),
  require('itreed/formatters/react'),
  require('itreed/formatters/vega'),
  require('itreed/formatters/table'),
  require('itreed/formatters/dom'),
  require('itreed/formatters/latex'),
  // require('itreed/formatters/image'),
  require('itreed/formatters/list-like'),
  require('itreed/formatters/js'),
]

formatters.map(plugin => {
  if (plugin.display) {
    format.displayer(plugin.display, plugin.mime)
  }
  if (plugin.format) {
    format.formatter(plugin.format, plugin.mime)
  }
})

import itreed from 'itreed'
import JS from 'itreed/plugins/itreed-js/index.js'
import JUP from 'itreed/plugins/itreed-jupyter'

import clojureScript from 'itreed/plugins/itreed-js/variants/clojurescript'
import babel from 'itreed/plugins/itreed-js/variants/babel'
import babelnode from 'itreed/plugins/itreed-jupyter/variants/babel'
import cljsnode from 'itreed/plugins/itreed-jupyter/variants/clojurescript'
import clojure from 'itreed/plugins/itreed-jupyter/variants/clojure'
import hy from 'itreed/plugins/itreed-jupyter/variants/hy'

// itreed kernels
itreed.register(JS)
itreed.registerVariant(babel)
itreed.registerVariant(clojureScript)

itreed.register(JUP)
itreed.registerVariant(hy)
itreed.registerVariant(babelnode)
itreed.registerVariant(cljsnode)
itreed.registerVariant(clojure)
