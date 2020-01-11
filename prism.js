
(() => {
  function install(Prism) {
    Prism.languages.wenyan = {
      comment: {
        pattern: /疏曰。?(?:「「|『).*?(?:」」|』)|注曰。?(?:「「|『).*?(?:」」|』)|批曰。?(?:「「|『).*?(?:」」|』)/,
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
        pattern: /不知何禍歟|姑妄行此|不復存矣|如事不諧|乃作罷|之禍歟|吾嘗觀|名之曰|物之|書之|以施|之禍|嗚呼|之義|昔之|今有|方悟|是矣|吾有|之書|今|取|噫|曰|施|豈|有/,
        greedy: true,
      },
      keyword: {
        pattern: /不知何禍歟|姑妄行此|不復存矣|如事不諧|乃作罷|之禍歟|吾嘗觀|名之曰|物之|書之|以施|之禍|嗚呼|之義|昔之|今有|方悟|是矣|吾有|之書|今|取|噫|曰|施|豈|有/,
        greedy: true,
      },
      selector: /量|物|爻|術|言|列|數/,
      property: /陰|陽|其/,
      number: /負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠/,
      operator: /中無陰乎|中有陽乎|不小於|不等於|不大於|等於|大於|小於|加|乘|除|以|於|減/,
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
