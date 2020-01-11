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
  punctuations,
} = require('./keywords')

function build() {
  const output = `
try {
  const CodeMirror = require('codemirror')
  require('codemirror/addon/mode/simple')
}
catch {}

CodeMirror.defineSimpleMode('wenyan', {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    { regex: new RegExp('${string}'), token: 'string' },
    { regex: new RegExp('${variable}'), token: 'variable' },
    { regex: new RegExp('${keywords}'), token: 'builtin' },
    { regex: new RegExp('${controls}'), token: 'keyword' },
    { regex: new RegExp('${types}'), token: 'type' },
    { regex: new RegExp('${atoms}'), token: 'atom' },
    { regex: new RegExp('${operators}'), token: 'operator' },
    { regex: new RegExp('${numbers}'), token: 'number' },
    { regex: new RegExp('${comments}|${punctuations}'), token: 'comment' },
  ],
})
`

  fs.writeFileSync(path.resolve(__dirname, '../codemirror.js'), output, 'utf-8')
}

build()