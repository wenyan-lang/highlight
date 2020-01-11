# 文言五色 - Collection of syntax highlighter for Wenyan Lang


#### Syntax highlighter

| Format | File |
| --- | --- |
| [CodeMirror](https://codemirror.net/mode/) | [codemirror.js](./codemirror.json) |
| [Prism](https://prismjs.com/extending.html) | [prism.js](./prism.js) |
| [TextMate Grammar](https://macromates.com/manual/en/language_grammars) | [tmGrammar.json](./tmGrammar.json) |

#### Highlight Theme

##### wenyan-light

| Format | File |
| --- | --- |
| [CodeMirror](https://codemirror.net/mode/) | [wenyan-light.codemirror.css](./wenyan-light.codemirror.css) |

### Usage

> 💡 Replace `codemirror` if you want to use different formats

#### CDN

```html
<!--Highlighter-->
<script src='https://raw.githubusercontent.com/wenyan-lang/highlight/master/codemirror.js'></script>
<!--Theme-->
<link rel='stylesheet' type='text/css' href='https://raw.githubusercontent.com/wenyan-lang/highlight/master/wenyan-light.codemirror.css'>
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