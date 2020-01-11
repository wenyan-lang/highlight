const Wenyan = require('@wenyanlang/core')

const keywords = []
const controls = []
const types = []
const operators = []
const atoms = []
const comments = []
const punctuations = ['。', '、']

const string = '(?:「「|『).*?(?:」」|』)'

for (const k of Object.keys(Wenyan.KEYWORDS)) {
  if (['print', 'decl', 'name', 'call', 'rassgn', 'take', 'import', 'throw', 'try', 'discard', 'take', 'assgn'].includes(Wenyan.KEYWORDS[k][0]))
    keywords.push(k)

  if (['ctrl'].includes(Wenyan.KEYWORDS[k][0]))
    controls.push(k)

  if (['bool', 'ans'].includes(Wenyan.KEYWORDS[k][0]))
    atoms.push(k)

  if (['lop', 'op', 'cmp', 'opord'].includes(Wenyan.KEYWORDS[k][0]))
    operators.push(k)

  if (['type'].includes(Wenyan.KEYWORDS[k][0]))
    types.push(k)

  if (['comment'].includes(Wenyan.KEYWORDS[k][0]))
    comments.push(`${k}。?${string}`)
}


module.exports = {
  string,
  variable: '「.*?」',
  keywords: keywords.join('|'),
  controls: controls.join('|'),
  types: types.join('|'),
  atoms: atoms.join('|'),
  operators: operators.join('|'),
  numbers: Wenyan.NUMBER_KEYWORDS.join('|'),
  comments: comments.join('|'),
  punctuations: punctuations.join('|'),
}
