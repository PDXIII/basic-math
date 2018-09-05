const path = require('path');

module.exports = {
  components: 'src/ui/**/[A-Z]*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/hoc/BasicMathTheme')
  }
}