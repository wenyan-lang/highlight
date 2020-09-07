const fs = require('fs')
const path = require('path')
const {
  string,
  variable,
  keywords,
  controls,
  types,
  atoms,
  operators,
  numbers,
  comments,
  punctuations,
  macros,
} = require('./keywords')

const output = `
(() => {
  function install(Prism) {
    Prism.languages.wenyan = {
      comment: {
        pattern: /${comments}/,
        greedy: true,
      },
      string: {
        pattern: /${string}/,
        greedy: true,
      },
      variable: {
        pattern: /${variable}/,
        greedy: true,
      },
      builtin: {
        pattern: /${keywords}/,
        greedy: true,
      },
      keyword: {
        pattern: /${controls}/,
        greedy: true,
      },
      tag: /${macros}/,
      selector: /${types}/,
      property: /${atoms}/,
      number: /${numbers}/,
      operator: /${operators}/,
      punctuation: /${punctuations}/,
    }
  }

  if (typeof window !== 'undefined' && window.Prism)
    install(window.Prism)

  if (typeof module !== 'undefined') {
    try {
      module.exports = install
    } catch (e) { }
  }
})();
` 

fs.writeFileSync(path.resolve(__dirname, '../wenyan.prism.js'), output, 'utf-8')
