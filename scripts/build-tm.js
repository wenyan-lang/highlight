const fs = require('fs')
const path = require('path')
const {
  keywords,
  controlsOneLetter,
  controlsTwoOrMoreLetters,
  types,
  atoms,
  operators,
  numbers,
  commentStarts,
  stringStart,
  stringEnd,
  punctuations,
  macros,
} = require('./keywords')

const output = {
  "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  "scopeName": "source.wenyan",
  "patterns": [
    {
      "include": "#keywords"
    },
    {
      "include": "#constants"
    },
    {
      "include": "#operators"
    },
    {
      "include": "#symbols"
    },
    {
      "include": "#expression"
    },
    {
      "include": "#comment-blocks"
    },
    {
      "include": "#comment-lines"
    }
  ],
  "repository": {
    "expression": {
      "patterns": [
        {
          "include": "#variables"
        }
      ]
    },
    "keywords": {
      "patterns": [
        {
          "name": "storage.type",
          "match": types
        },
        {
          "name": "keyword.control",
          "match": controlsTwoOrMoreLetters
        },
        {
          "name": "keyword.control",
          "match": macros
        },
        {
          "name": "keyword.operator",
          "match": operators
        },
        {
          "name": "keyword.other",
          "match": keywords,
        },
        {
          "name": "keyword.control",
          "match": controlsOneLetter
        },
      ]
    },
    "comment-lines": {
      "name": "comment.line",
      "begin": commentStarts,
      "end": "$",
      "patterns": [
        {
          "name": "constant.character",
          "match": "\\\\."
        }
      ]
    },
    "comment-blocks": {
      "name": "comment.block",
      "begin": `(${commentStarts})。?(「「|『)`,
      "end": "(」」|』)",
      "patterns": [
        {
          "name": "constant.character",
          "match": "\\\\."
        }
      ]
    },
    "constants": {
      "patterns": [
        {
          "name": "constant.numeric",
          "match": numbers
        },
        {
          "name": "constant.language",
          "match": atoms
        },
        {
          "name": "string.quoted",
          "begin": stringStart,
          "end": stringEnd,
          "patterns": [
            {
              "name": "constant.character",
              "match": "\\\\."
            }
          ]
        }
      ]
    },
    "symbols": {
      "patterns": [
        {
          "name": "punctuation.separator",
          "match": punctuations
        }
      ]
    },
    "variables": {
      "name": "variable.other",
      "begin": "「",
      "end": "」",
      "patterns": [
        {
          "name": "constant.character",
          "match": "\\\\."
        }
      ]
    }
  }
}

fs.writeFileSync(path.resolve(__dirname, '../tmGrammar.json'), JSON.stringify(output, null, 2) + '\n', 'utf-8')