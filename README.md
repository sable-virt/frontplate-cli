# frontplate-cli

CLI for Front-end developers. (Inspired by angular-cli)

## Feature

- HTMLモジュール([ejs](https://www.npmjs.com/package/ejs))
- SASS([node-sass](https://www.npmjs.com/package/node-sass))
- SASSLint([sass-lint](https://www.npmjs.com/package/sass-lint))
- スタイルガイド生成（[frontnote](https://www.npmjs.com/package/frontnote)）
- JSモジュールバンドラー([webpack](https://www.npmjs.com/package/webpack))
- ES2015([babel](https://www.npmjs.com/package/babel))
- スプライト画像の作成とSassファイルの出力([spritesmith](https://www.npmjs.com/package/spritesmith))
- CSS/JSの圧縮と最適化([postcss-csso](https://www.npmjs.com/package/postcss-csso) [google-closure-compiler](https://www.npmjs.com/package/google-closure-compiler))
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

- -b, --branch: template branch name
- -p, --preset: Preset template name
- -g, --github: template's github name (ex: frontainer/frontplate)

templates

- [default](https://github.com/frontainer/frontplate)
- [wp](https://github.com/frontainer/wp-frontplate)

### Build project

```
frp build [options]
```

options

- -p, --production

### Server up

```
frp serve [options]
```

options

- -p, --production
- -t, --test: Watch unit testing

### Execute single task

```
frp task <TASK_NAME> [options]
```

TASK_NAME(clean|copy|html|script|server|sprite|style|test)

options

- -p, --production

### Create config files

```
frp init
```

※ このコマンドを実行した場合、バージョンアップなど一部サポートを受けられないことがあります

## 想定される構成

```
package.json - npmパッケージ設定ファイル
frp.config.js - テンプレートの全体の設定ファイル。出力先や各タスクの設定を記述
/public - コンパイルされたデータが入っている
/config - 設定用フォルダ
  ┣ copy.config.js
  ┣ html.config.js
  ┣ server.config.js
  ┣ sprite.config.js
  ┣ style.config.js
  ┣ test.conf.js
  ┣ webpack.config.js
  ┣ webpack.config.production.js
  ┣ webpack.core.js
/src - 開発用フォルダ
  ┣ /images - 画像を入れるフォルダ。public/pc/imagesに複製される
  ┣ /js - JSフォルダ。ES6で書ける。直下にあるJSは
  ┃  ┣ app.js - public/pc/js/app.jsとして出力される
  ┃  ┣ app-spec.js - -spec.jsは出力されない。テスト実行時に読み込まれる
  ┃  ┣ xxx.js - public/pc/js/xxx.jsとして出力される
  ┃  ┗ /sub
  ┃     ┗ sub.js - ここファイルは出力されないが変更は監視される
  ┣ /lib - ライブラリフォルダ。外部ライブラリ等を置く。public/pc/libに複製される
  ┣ /sass - sassフォルダ。ファイル名が_(アンダースコア)で始まっていないscssはpublic/pc/cssに出力される
  ┣ /sprites - スプライト生成フォルダ。ここに作ったフォルダがsass/sprites/_フォルダ名.scssとして出力される
  ┃  ┗ /icon - スプライト画像を入れるフォルダ。class="icon icon-ファイル名"で参照されるので英数字推奨
  ┣ /test - テストコードを置くフォルダ。ここにおいたファイルはテストコードとして実行される
  ┗ /view - ビューファイル(ejs)を置くフォルダ。ファイル名が_(アンダースコア)で始まっていないejsはpublic/pcに出力される
      ┣ index.ejs - public/pc/index.htmlとして出力される
      ┗ parts/
         ┣ _header.ejs - アンダースコアから始まるファイルは出力されない
         ┗ sub.ejs - public/pc/parts/sub.htmlとして出力される
```

### スプライト画像生成

複数の画像をタイル上に１枚の画像にするスプライトを自動的に生成します。images/spites以下のディレクトリごとにスプライト画像とsassファイルを出力

#### 例

```
sprites/icon/icon-twitter.png
sprites/icon/icon-twitter.png
```
↓ `frp build`
```
images/sprites/icon.png
sass/sprites/_icon.scss
```

スプライト画像は`src/images/sprites/*.png`に、sassは`src/sass/sprites/_*.scss`に展開されるので、作られたsassを`@import`して使用します。
