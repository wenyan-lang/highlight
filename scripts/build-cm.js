const fs = require('fs')
const path = require('path')
const  {
  string,
  variable,
  keywords,
  controls,
  types,
  atoms,
  operators,
  numbers,
  comments,
  macros,
  punctuations,
} = require('./keywords')

const output = `
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {

  CodeMirror.defineSimpleMode('wenyan', {
    // The start state contains the rules that are intially used
    start: [
      // The regex matches the token, the token property contains the type
      { regex: /${string}/, token: 'string' },
      { regex: /${variable}/, token: 'variable' },
      { regex: /${keywords}/, token: 'builtin' },
      { regex: /${controls}|${macros}/, token: 'keyword' },
      { regex: /${types}/, token: 'type' },
      { regex: /${atoms}/, token: 'atom' },
      { regex: /${operators}/, token: 'operator' },
      { regex: /${numbers}/, token: 'number' },
      { regex: /${comments}|${punctuations}/, token: 'comment' },
    ],
  })
})
`

fs.writeFileSync(path.resolve(__dirname, '../wenyan.codemirror.js'), output, 'utf-8')
