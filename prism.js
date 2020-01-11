
(() => {
  function install(Prism) {
    Prism.languages.wenyan = {
      comment: {
        pattern: /注曰。?(?:「「|『).*?(?:」」|』)|疏曰。?(?:「「|『).*?(?:」」|』)|批曰。?(?:「「|『).*?(?:」」|』)/,
        greedy: true,
      },
      string: {
        pattern: /(?:「「|『).*?(?:」」|』)/,
        greedy: true,
      },
      variable: {
        pattern: /「.*?」/,
        greedy: true,
      },
      builtin: {
        pattern: /不知何禍歟|不復存矣|如事不諧|姑妄行此|吾嘗觀|之禍歟|乃作罷|名之曰|書之|以施|之禍|嗚呼|之義|昔之|方悟|是矣|今有|吾有|之書|物之|中|今|取|噫|曰|施|豈|有/,
        greedy: true,
      },
      keyword: {
        pattern: /不知何禍歟|不復存矣|如事不諧|姑妄行此|吾嘗觀|之禍歟|乃作罷|名之曰|書之|以施|之禍|嗚呼|之義|昔之|方悟|是矣|今有|吾有|之書|物之|中|今|取|噫|曰|施|豈|有/,
        greedy: true,
      },
      selector: /元|物|爻|術|言|列|數/,
      property: /陰|陽|其/,
      number: /負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠/,
      operator: /中有陽乎|中無陰乎|不等於|不大於|不小於|等於|大於|小於|加|乘|除|以|於|減/,
      punctuation: /。|、/,
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
