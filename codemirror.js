
try {
  const CodeMirror = require('codemirror')
  require('codemirror/addon/mode/simple')
}
catch {}

CodeMirror.defineSimpleMode('wenyan', {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    { regex: /(「「|『).*?(」」|』)/, token: 'string' },
    { regex: /「.*?」/, token: 'variable' },
    { regex: /不知何禍歟|不復存矣|如事不諧|姑妄行此|吾嘗觀|之禍歟|乃作罷|名之曰|書之|以施|之禍|嗚呼|之義|昔之|方悟|是矣|今有|吾有|之書|物之|夫|中|今|取|噫|曰|施|豈|有/, token: 'builtin' },
    { regex: /乃行是術曰|若其不然者|乃止是遍|乃歸空無|欲行是術|若其然者|其物如是|乃得矣|恆為是|之術也|必先得|是術曰|之物也|云云|中之|為是|乃止|若非|或若|乃得|是謂|者|若|遍|凡|也|蓋謂|或云/, token: 'keyword' },
    { regex: /元|物|爻|術|言|列|數/, token: 'type' },
    { regex: /陰|陽|其/, token: 'atom' },
    { regex: /中有陽乎|中無陰乎|不等於|不大於|不小於|等於|大於|小於|加|乘|除|以|於|減/, token: 'operator' },
    { regex: /負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠/, token: 'number' },
    { regex: /注曰。?(「「|『).*?(」」|』)|疏曰。?(「「|『).*?(」」|』)|批曰。?(「「|『).*?(」」|』)|。|、/, token: 'comment' },
  ],
})
