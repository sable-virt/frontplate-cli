# frontplate-cli

This CLI is still beta version.

## Feature

- HTMLモジュール([ejs](https://www.npmjs.com/package/ejs))
- SASS([node-sass](https://www.npmjs.com/package/node-sass))
- SASSLint([sass-lint](https://www.npmjs.com/package/sass-lint))
- スタイルガイド生成（[frontnote](https://www.npmjs.com/package/frontnote)）
- JSモジュールバンドラー([webpack](https://www.npmjs.com/package/webpack))
- ES2015([babel](https://www.npmjs.com/package/babel))
- スプライト画像の作成とSassファイルの出力([spritesmith](https://www.npmjs.com/package/spritesmith))
- JSの圧縮と最適化([google-closure-compiler](https://www.npmjs.com/package/google-closure-compiler))
- CSSのベンダープレフィックス付与自動化([autoprefixer](https://www.npmjs.com/package/autoprefixer))
- ユニットテスト([karma](https://www.npmjs.com/package/karma) [jasmine](https://www.npmjs.com/package/jasmine))
- LiveReload([browser-sync](https://www.npmjs.com/package/browser-sync))
- ESLint([eslint](https://www.npmjs.com/package/eslint))
- HTMLHint([htmlhint](https://www.npmjs.com/package/htmlhint))

## Usage

```
npm i frontplate-cli -g
```

## Command

### Create project
```
frp create <APP_NAME> [options]
```

options

- -p, --preset: Preset template name

templates

- [default](https://github.com/frontainer/frontplate)
- [wp](https://github.com/frontainer/wp-frontplate)

### Build project

```
frp build
```

options

- -p, --production

### Server up

```
frp serve [options]
```

options

- -p, --production

### Execute task

```
frp task <TASK_NAME>
```

TASK_NAME(clean,copy,html,image,script,server,sprite,style,test)

### Create config files

```
frp init
```