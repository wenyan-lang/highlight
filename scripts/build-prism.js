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
      function: {
        pattern: /${variable}/,
        greedy: true,
      },
      keyword: {
        pattern: /${keywords}/,
        greedy: true,
      },
      builtin: /${controls}/,
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

fs.writeFileSync(path.resolve(__dirname, '../prism.js'), output, 'utf-8')