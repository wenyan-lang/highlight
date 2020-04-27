const Wenyan = require('@wenyan/core')

const keywords = []
const controls = []
const types = []
const operators = []
const atoms = []
const comments = []
const commentStarts = []
const macros = []
const punctuations = ['。', '、']

const stringStart = '「「|『'
const stringEnd = '」」|』'
const string = `(${stringStart}).*?(${stringEnd})`

for (const k of Object.keys(Wenyan.KEYWORDS)) {
  if (['print', 'decl', 'name', 'call', 'rassgn', 'take', 'expr', 'import', 'throw', 'try', 'discard', 'take', 'assgn'].includes(Wenyan.KEYWORDS[k][0]))
    keywords.push(k)

  if (['ctrl', 'ctnr'].includes(Wenyan.KEYWORDS[k][0]))
    controls.push(k)

  if (['bool', 'ans'].includes(Wenyan.KEYWORDS[k][0]))
    atoms.push(k)

  if (['lop', 'op', 'cmp', 'opord', 'not', 'mod'].includes(Wenyan.KEYWORDS[k][0]))
    operators.push(k)

  if (['type'].includes(Wenyan.KEYWORDS[k][0]))
    types.push(k)

  if (['comment'].includes(Wenyan.KEYWORDS[k][0])) {
    comments.push(`${k}。?${string}`)
    commentStarts.push(k)
  }

  if (['macro'].includes(Wenyan.KEYWORDS[k][0]))
    macros.push(k)
}


module.exports = {
  string,
  stringStart,
  stringEnd,
  macros: macros.join('|'),
  variable: '「.*?」',
  keywords: keywords.join('|'),
  controls: controls.join('|'),
  controlsOneLetter: controls.filter(i => i.length === 1).join('|'),
  controlsTwoOrMoreLetters: controls.filter(i => i.length !== 1).join('|'),
  types: types.join('|'),
  atoms: atoms.join('|'),
  operators: operators.join('|'),
  numbers: Wenyan.NUMBER_KEYWORDS.join('|'),
  comments: comments.join('|'),
  commentStarts: commentStarts.join('|'),
  punctuations: punctuations.join('|'),
}
