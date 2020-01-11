
try {
  const CodeMirror = require('codemirror')
  require('codemirror/addon/mode/simple')
}
catch {}

CodeMirror.defineSimpleMode('wenyan', {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    { regex: new RegExp('(?:「「|『).*?(?:」」|』)'), token: 'string' },
    { regex: new RegExp('「.*?」'), token: 'variable' },
    { regex: new RegExp('不知何禍歟|姑妄行此|不復存矣|如事不諧|乃作罷|之禍歟|吾嘗觀|名之曰|物之|書之|以施|之禍|嗚呼|之義|昔之|今有|方悟|是矣|吾有|之書|今|取|噫|曰|施|豈|有'), token: 'builtin' },
    { regex: new RegExp('乃行是術曰|乃歸空無|其物如是|欲行是術|必先得|恆為是|乃得矣|之物也|之術也|是術曰|是謂|云云|中之|為是|乃止|若非|乃得|者|若|遍|凡|也'), token: 'keyword' },
    { regex: new RegExp('量|物|爻|術|言|列|數'), token: 'type' },
    { regex: new RegExp('陰|陽|其'), token: 'atom' },
    { regex: new RegExp('中無陰乎|中有陽乎|不小於|不等於|不大於|等於|大於|小於|加|乘|除|以|於|減'), token: 'operator' },
    { regex: new RegExp('負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠'), token: 'number' },
    { regex: new RegExp('疏曰。?(?:「「|『).*?(?:」」|』)|注曰。?(?:「「|『).*?(?:」」|』)|批曰。?(?:「「|『).*?(?:」」|』)|。|、'), token: 'comment' },
  ],
})
