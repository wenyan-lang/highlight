try {
  const Wenyan = require('@wenyanlang/core')
  const CodeMirror = require('codemirror')
  require('codemirror/addon/mode/simple')
}
catch {}

const keywords = []
const controls = []
const types = []
const ops = []
const atoms = []
const comments = []

for (const k of Object.keys(Wenyan.KEYWORDS)) {
  if (['print', 'decl', 'name', 'call', 'rassgn', 'take', 'import', 'throw', 'try', 'discard', 'take', 'assgn'].includes(Wenyan.KEYWORDS[k][0]))
    keywords.push(k)

  if (['ctrl'].includes(Wenyan.KEYWORDS[k][0]))
    controls.push(k)

  if (['bool', 'ans'].includes(Wenyan.KEYWORDS[k][0]))
    atoms.push(k)

  if (['lop', 'op', 'cmp', 'opord'].includes(Wenyan.KEYWORDS[k][0]))
    ops.push(k)

  if (['type'].includes(Wenyan.KEYWORDS[k][0]))
    types.push(k)

  if (['comment'].includes(Wenyan.KEYWORDS[k][0]))
    comments.push(`${k}。?「「.*?」」`)
}

CodeMirror.defineSimpleMode('wenyan', {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    { regex: /(「「.*?」」)/, token: 'string' },
    { regex: /(「.*?」)/, token: 'variable' },
    { regex: new RegExp(keywords.join('|')), token: 'builtin' },
    { regex: new RegExp(controls.join('|')), token: 'keyword' },
    { regex: new RegExp(types.join('|')), token: 'type' },
    { regex: new RegExp(atoms.join('|')), token: 'atom' },
    { regex: new RegExp(ops.join('|')), token: 'operator' },
    { regex: new RegExp(Wenyan.NUMBER_KEYWORDS.join('|')), token: 'number' },
    { regex: new RegExp(`${comments.join('|')}|。|、`), token: 'comment' },
  ],
})
