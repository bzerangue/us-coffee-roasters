const CleanCSS = require('clean-css')
const UglifyJS = require('uglify-js')
const slugify = require('@sindresorhus/slugify')

module.exports = {
  cssmin: function(code) {
    return new CleanCSS({}).minify(code).styles
  },

  jsmin: function(code) {
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  },

  dedupe: function(arr) {
    const uniqueArr = arr.reduce((acc, index) => {
      const x = acc.find(item => item.state === index.state);
      if (!x) {
        return acc.concat([index]);
      } else {
        return acc;
      }
    }, [])
    return uniqueArr
  },

  slugify: function(str) {
    return slugify(str)
  }
}
