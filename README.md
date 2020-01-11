# 文言五色 - Syntax highlighters for Wenyan Lang

Check out the [examples](https://wenyan-lang.github.io/highlight)

### Syntax highlighters

| Format | File |
| --- | --- |
| [CodeMirror](https://codemirror.net/mode/) | [codemirror.js](./codemirror.json) |
| [Prism](https://prismjs.com/extending.html) | [prism.js](./prism.js) |
| [TextMate Grammar](https://macromates.com/manual/en/language_grammars) | [tmGrammar.json](./tmGrammar.json) |

### Highlight Themes

#### wenyan-light

| Format | File |
| --- | --- |
| [CodeMirror](https://codemirror.net/mode/) | [wenyan-light.codemirror.css](./wenyan-light.codemirror.css) |
| [Prism](https://codemirror.net/mode/) | [wenyan-light.prism.css](./wenyan-light.prism.css) |

### Usage

> 💡 Replace `codemirror` if you want to use different formats/editors

#### CDN

```html
<!--Highlighter-->
<script src='https://cdn.jsdelivr.net/gh/wenyan-lang/highlight/codemirror.js'></script>
<!--Theme-->
<link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/gh/wenyan-lang/highlight/wenyan-light.codemirror.css'>
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