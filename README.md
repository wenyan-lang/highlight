# 文言五色 - Collection of syntax highlight for Wenyan Lang

| Format | File | Note |
| --- | --- | --- |
| [TextMate Grammar](https://macromates.com/manual/en/language_grammars) | [tmGrammar.json](./tmGrammar.json) |
| [CodeMirror](https://codemirror.net/mode/) | [codemirror.js](./codemirror.json) |
| [Prism](https://prismjs.com/extending.html) | [prism.js](./prism.js) |

### Usage

Replace `codemirror` if you want to use different formats

#### CDN

```html
<script src='https://raw.githubusercontent.com/wenyan-lang/highlight/master/codemirror.js'></script>
```

#### NPM

```bash
npm i @wenyanlang/highlight
```

```js
require('@wenyanlang/highlight/codemirror')

// or 

import '@wenyanlang/highlight/codemirror'
```

### Build

The syntax highlighter are generated from the language syntax definition. Rebuild by 

```bash
npm run build
```