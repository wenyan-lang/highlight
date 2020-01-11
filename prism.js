(() => {
	function install(Prism) {
		Prism.languages.wenyan = {
			'comment': {
				pattern: /(注曰|疏曰|批曰)。?(?:[^\n]*|(?:「「|『)[\s\S]*(?:」」|』))/m,
				greedy: true
			},
			'selector': /(數|列|言|術|爻|物)/,
			'string': {
				pattern: /(?:「「|『).*?(?:」」|』)/,
				greedy: true
			},
			'number': /(陰|陽|又|負|零|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穣|溝|澗|正|載|極|恆河沙|阿僧祇|那由他|不可思議|無量大數|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠|模糊|逡巡|須臾|瞬息|彈指|剎那|六德|虛|空|清|淨)/,
			'operator': /(加|減|乘|除|中有陽乎|中無陰乎|變|所餘幾何|以|於|之長|充|銜|其餘|昔之|是矣|其|不復存矣|今|之)/,
			'type': /(數|列|言|術|爻|物|量)/,
			'keyword': {
				pattern: /(吾有|今有|有|恆為是|若非|若|者|夫|乃得|乃歸空無|是謂|之術也|必先得|是術曰|乃行是術曰|欲行是術|也|云云|凡|中之|恆為是|為是|遍|乃止|其物如是|或云|蓋謂|書之|名之曰|施|曰|噫|取|矣|吾嘗觀|之書|方悟|之義|是謂)/,
				greedy: true
			},
			'function': {
				pattern: /「.+?」/i,
				greedy: true,
			},
			'punctuation': /。/
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