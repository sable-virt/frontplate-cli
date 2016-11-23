<a name="2.1.0"></a>
# [2.1.0](https://github.com/frontainer/frontplate-cli/compare/v2.0.9...v2.1.0) (2016-11-23)


### fix

* copyタスク監視実行時にブラウザが更新されないことがある ([31bf8246e7eec936a80c1e3468071177fad92bad](https://github.com/frontainer/frontplate-cli/commit/31bf8246e7eec936a80c1e3468071177fad92bad))
* webpackのpublicPathのデフォルト間違い ([28e92c0422c98e5dc9addaa13acdcea48029c2df](https://github.com/frontainer/frontplate-cli/commit/28e92c0422c98e5dc9addaa13acdcea48029c2df))
* デフォルトのejs監視対象をsvg,htmlも含めるように ([58aaac218367a9780cbb93cc5af32f33e3eb3b51](https://github.com/frontainer/frontplate-cli/commit/58aaac218367a9780cbb93cc5af32f33e3eb3b51))



<a name="2.0.9"></a>
## [2.0.9](https://github.com/frontainer/frontplate-cli/compare/v2.0.8...v2.0.9) (2016-11-21)


### new

* cleanタスクのsrcがnull/falseの場合は処理をスキップできるように ([ccf2a49547ad772d074366e880e70735e6c7f859](https://github.com/frontainer/frontplate-cli/commit/ccf2a49547ad772d074366e880e70735e6c7f859))



<a name="2.0.8"></a>
## [2.0.8](https://github.com/frontainer/frontplate-cli/compare/v2.0.7...v2.0.8) (2016-11-20)


### fix

* ejsのデフォルト参照をFRP_SRC直下から参照するように ([51f68e92e5397c7c7230bc1cc033e29a5effddc1](https://github.com/frontainer/frontplate-cli/commit/51f68e92e5397c7c7230bc1cc033e29a5effddc1))

### new

* スタイルガイドを生成しないオプション ([1699cd85eb227b8e78226abc35bb2f6646edca4a](https://github.com/frontainer/frontplate-cli/commit/1699cd85eb227b8e78226abc35bb2f6646edca4a))



<a name="2.0.7"></a>
## [2.0.7](https://github.com/frontainer/frontplate-cli/compare/v2.0.6...v2.0.7) (2016-11-14)


### fix

* src/jsディレクトリにパスが通っていなかったのを修正 ([f78783a2a385d35a8ac7a2ed8487a504ee5615d6](https://github.com/frontainer/frontplate-cli/commit/f78783a2a385d35a8ac7a2ed8487a504ee5615d6))
* webpack2.1.0-beta.26でloader指定で-loaderを省略するとbabelコンパイルできない ([58bd92d9506caadd3179a7c27b1934852259115c](https://github.com/frontainer/frontplate-cli/commit/58bd92d9506caadd3179a7c27b1934852259115c))



<a name="2.0.6"></a>
## [2.0.6](https://github.com/frontainer/frontplate-cli/compare/v2.0.5...v2.0.6) (2016-11-11)


### fix

* frp create コマンドでpresetが効かない ([c8f3fc6084b8ac5b00c97b2d372829be1f71b36b](https://github.com/frontainer/frontplate-cli/commit/c8f3fc6084b8ac5b00c97b2d372829be1f71b36b))



<a name="2.0.5"></a>
## [2.0.5](https://github.com/frontainer/frontplate-cli/compare/v2.0.4...v2.0.5) (2016-11-11)


### add

* sassのimportでの'~'記法をサポート ([4be0f708631a609cedb4b9bd3bdcda924adbcac7](https://github.com/frontainer/frontplate-cli/commit/4be0f708631a609cedb4b9bd3bdcda924adbcac7))



<a name="2.0.4"></a>
## [2.0.4](https://github.com/frontainer/frontplate-cli/compare/v2.0.3...v2.0.4) (2016-11-09)


### fix

* scssがエラーになった際にエラーの内容が表示されない ([1924494b0fc059e7505cbebe4ba3c39077181d72](https://github.com/frontainer/frontplate-cli/commit/1924494b0fc059e7505cbebe4ba3c39077181d72))
* webpack-configでresolve,resolveLoaderを変更している場合にjsエラーが発生する可能性がある ([cd8d4fa0c1df1c4d9da8139bf561b33ef78ee5d4](https://github.com/frontainer/frontplate-cli/commit/cd8d4fa0c1df1c4d9da8139bf561b33ef78ee5d4))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/frontainer/frontplate-cli/compare/v2.0.2...v2.0.3) (2016-11-08)


### fix

* CLIで動的に生成していたscriptのモジュール読み込み先を設定ファイルに記述することで統一 ([402ce1f1142a1aff88914bc7b67617835e53d2aa](https://github.com/frontainer/frontplate-cli/commit/402ce1f1142a1aff88914bc7b67617835e53d2aa))
* GAなどのスクリプトを頻繁に入れることがあるため、"head-script-disabled"をチェックしないように ([f4b41c09469148c664c194bb3b77cefc280177a0](https://github.com/frontainer/frontplate-cli/commit/f4b41c09469148c664c194bb3b77cefc280177a0))
* ユニットテストでwebpackの設定が反映されずカスタマイズするとビルドできなくなる ([5c3f94001866427f7231146f1401972f1cebb7e7](https://github.com/frontainer/frontplate-cli/commit/5c3f94001866427f7231146f1401972f1cebb7e7))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/frontainer/frontplate-cli/compare/v2.0.1...v2.0.2) (2016-11-07)


### fix

* eslintの設定をES6モジュールをサポートするように  ([4c632727f030af0f6dedc7f9252e9834a5828979](https://github.com/frontainer/frontplate-cli/commit/4c632727f030af0f6dedc7f9252e9834a5828979))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/frontainer/frontplate-cli/compare/v2.0.0...v2.0.1) (2016-11-04)


### fix

* babel-eslintは不要になっているので削除 ([01332fc0819a04dde87193f36f8562a10975835e](https://github.com/frontainer/frontplate-cli/commit/01332fc0819a04dde87193f36f8562a10975835e))
* frpコマンドの対話でcreateできない ([002c702bf93ee7fe2bc4d8e2890c2186246a68ed](https://github.com/frontainer/frontplate-cli/commit/002c702bf93ee7fe2bc4d8e2890c2186246a68ed))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/frontainer/frontplate-cli/compare/v1.7.1...v2.0.0) (2016-11-03)


### breaking

* frp initコマンドは影響が大きくアップデートを阻害するので削除 ([3f4fe2f6bd70beebe5ac65744ce27181f29d1049](https://github.com/frontainer/frontplate-cli/commit/3f4fe2f6bd70beebe5ac65744ce27181f29d1049))

### fix

* `frp build` cannot automatically load local .eslintrc #8 ([5d91a6fd5d01cbdb91228cf42709f2973c5d5a2d](https://github.com/frontainer/frontplate-cli/commit/5d91a6fd5d01cbdb91228cf42709f2973c5d5a2d))

### new

* configからビルドソースのディレクトリを指定できるように ([d63c567955fbdf3734041268b91ea0afa8971434](https://github.com/frontainer/frontplate-cli/commit/d63c567955fbdf3734041268b91ea0afa8971434))
* frp単体で対話式にコマンド実行できる機能 ([d39c9012648a3bf1bda6d6b5fc0611ffe66a966d](https://github.com/frontainer/frontplate-cli/commit/d39c9012648a3bf1bda6d6b5fc0611ffe66a966d))

### refactor

* フォルダを整理してCLIヘルパーをcommanderからyargsに乗せ換え ([62fa05dac809c3968a0b766ddebc1561263bc995](https://github.com/frontainer/frontplate-cli/commit/62fa05dac809c3968a0b766ddebc1561263bc995))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/frontainer/frontplate-cli/compare/v1.7.0...v1.7.1) (2016-11-01)


### fix

* ローカルに導入したeslintプラグインが参照できない ([9a9c1bc92584ff265f25537160658ca7976ab359](https://github.com/frontainer/frontplate-cli/commit/9a9c1bc92584ff265f25537160658ca7976ab359))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/frontainer/frontplate-cli/compare/v1.6.0...v1.7.0) (2016-10-30)


### breaking

* closure-cmpiler-jsはAngular他ライブラリとの互換性が今のところ不安定なのでUglifyに差し戻し ([3b06bf1aa584fd9f549c14d0bfd7d67375505d0f](https://github.com/frontainer/frontplate-cli/commit/3b06bf1aa584fd9f549c14d0bfd7d67375505d0f))

### fix

* webpack2に合わせてmodule.loadersからmodule.rulesに修正 ([2ed03906b6ecf1d76dff377ed0e020dce7afdf63](https://github.com/frontainer/frontplate-cli/commit/2ed03906b6ecf1d76dff377ed0e020dce7afdf63))
* スタイルガイド生成によってsass変更時もブラウザフル更新されるのを修正 ([3e8eb48dae25059bb6e8efd4b1845cf1e360cd3e](https://github.com/frontainer/frontplate-cli/commit/3e8eb48dae25059bb6e8efd4b1845cf1e360cd3e))

### update

* eslint package ([81c02b01cc73d5dbbf472a4da02d1339c8071d54](https://github.com/frontainer/frontplate-cli/commit/81c02b01cc73d5dbbf472a4da02d1339c8071d54))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/frontainer/frontplate-cli/compare/v1.5.0...v1.6.0) (2016-10-27)


### breaking

* configの継承は行わず、第２階層以降は置き換えるよう変更 ([219f9f3e08859af1e8fb6dec69bdfe6d90622213](https://github.com/frontainer/frontplate-cli/commit/219f9f3e08859af1e8fb6dec69bdfe6d90622213))

### fix

* sprite config ([20f2a5d509a0e0ae50f49de6e863b11ffeee57b1](https://github.com/frontainer/frontplate-cli/commit/20f2a5d509a0e0ae50f49de6e863b11ffeee57b1))
* オプションがきちんと継承できていない ([05ce7be04aee852631f2ec1e658d8c58d284f6ed](https://github.com/frontainer/frontplate-cli/commit/05ce7be04aee852631f2ec1e658d8c58d284f6ed))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/frontainer/frontplate-cli/compare/v1.4.0...v1.5.0) (2016-10-27)


### breaking

* cleanタスクの設定もconfig外部ファイル化 ([035bbe3abc587033160ef15f166e1d556ca2bd76](https://github.com/frontainer/frontplate-cli/commit/035bbe3abc587033160ef15f166e1d556ca2bd76))
* frp initの仕様変更 - config全部展開ではなくfrp.config.jsのテンプレとlint設定ファイルだけを出力するように ([35589edfebded64d7709b5b0cbcb2c56662684a1](https://github.com/frontainer/frontplate-cli/commit/35589edfebded64d7709b5b0cbcb2c56662684a1))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/frontainer/frontplate-cli/compare/v1.3.1...v1.4.0) (2016-10-27)


### breaking

* chrom-launcherからphantomjs-launcherに変更 ([5eb027b5c6ca8639965f48176d794a7a36a0da9e](https://github.com/frontainer/frontplate-cli/commit/5eb027b5c6ca8639965f48176d794a7a36a0da9e))
* test関連の設定ファイルを通常のオブジェクトに変更 ([c94a559bc000b7d2b4f7fc94ec2a27899c0f6315](https://github.com/frontainer/frontplate-cli/commit/c94a559bc000b7d2b4f7fc94ec2a27899c0f6315))

### fix

* indentと0 unitは軽微なためsass lintしない ([c5d2806c9cb5f25a282e23174f37494dea67855b](https://github.com/frontainer/frontplate-cli/commit/c5d2806c9cb5f25a282e23174f37494dea67855b))
* svgを多用するとwarningが出るのでデフォルトのattr-lowercaseをオフに ([7d1fcb317f462cb5e600c9e4c8cf7d5cf31392ef](https://github.com/frontainer/frontplate-cli/commit/7d1fcb317f462cb5e600c9e4c8cf7d5cf31392ef))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/frontainer/frontplate-cli/compare/v1.3.0...v1.3.1) (2016-10-27)


### fix

* serveコマンドが動作しない ([7b0c1ea308d63644b45d3b34def7534175ed78c5](https://github.com/frontainer/frontplate-cli/commit/7b0c1ea308d63644b45d3b34def7534175ed78c5))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/frontainer/frontplate-cli/compare/v1.2.3...v1.3.0) (2016-10-26)


### breaking

* 画像圧縮タスクが環境依存が激しいため削除 ([a87885a86579e8e49e45ec9e354323aef1823beb](https://github.com/frontainer/frontplate-cli/commit/a87885a86579e8e49e45ec9e354323aef1823beb))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/frontainer/frontplate-cli/compare/v1.2.2...v1.2.3) (2016-10-26)


### add

* frp initしたタイミングでconfigで使われているパッケージをローカルインストールするように ([348391067a045d06ac82dec0949c94fdc33449a5](https://github.com/frontainer/frontplate-cli/commit/348391067a045d06ac82dec0949c94fdc33449a5))
* packageを指定したnpm installが実行できるように ([772077f5778b6b0c56623f58549090b18b00ef7b](https://github.com/frontainer/frontplate-cli/commit/772077f5778b6b0c56623f58549090b18b00ef7b))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/frontainer/frontplate-cli/compare/v1.2.1...v1.2.2) (2016-10-25)


### fix

* htmlhintの設定が反映されていない #6 ([e7dfdf74fdc36541dce204c54067bcbd3be93278](https://github.com/frontainer/frontplate-cli/commit/e7dfdf74fdc36541dce204c54067bcbd3be93278))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/frontainer/frontplate-cli/compare/v1.2.0...v1.2.1) (2016-10-25)


### fix

* imagemin-imozjpegをimagemin-jpegoptimに変更 ([86e69d72103926c90f43286d6eef21045c791c9c](https://github.com/frontainer/frontplate-cli/commit/86e69d72103926c90f43286d6eef21045c791c9c))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/frontainer/frontplate-cli/compare/v1.1.5...v1.2.0) (2016-10-19)


### add

* frp createコマンドに -y,--yarn オプションを追加。 npm installの代わりにyarn installを実行する ([b1463c244a7e9cfbbf96b33d2802cfadd5554561](https://github.com/frontainer/frontplate-cli/commit/b1463c244a7e9cfbbf96b33d2802cfadd5554561))

### break

* core.configが指定として複雑になっていたのでグローバル変数FRP_DESTで定義 ([0aa50d697dc9328e318239378a558b505daa9ef5](https://github.com/frontainer/frontplate-cli/commit/0aa50d697dc9328e318239378a558b505daa9ef5))



<a name="1.1.5"></a>
## [1.1.5](https://github.com/frontainer/frontplate-cli/compare/v1.1.4...v1.1.5) (2016-10-12)


### fix

* frpをグローバルにインストールした後、npm -g listするとエラーが出ている #3 ([2e2d5863cc1d49c98349e93d55ac53a34aa13488](https://github.com/frontainer/frontplate-cli/commit/2e2d5863cc1d49c98349e93d55ac53a34aa13488))
* imageminで画像が圧縮できていない ([c24aa60baf55d07f9f9a4bcf19414761ed556dd0](https://github.com/frontainer/frontplate-cli/commit/c24aa60baf55d07f9f9a4bcf19414761ed556dd0))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/frontainer/frontplate-cli/compare/v1.1.3...v1.1.4) (2016-10-11)


### fix

* imageタスクで階層構造が維持されない ([a3e389bf2f436acc6f99bf33d1cdfd1d84b8e25c](https://github.com/frontainer/frontplate-cli/commit/a3e389bf2f436acc6f99bf33d1cdfd1d84b8e25c))
* 配列0件に対するレスポンスをシンプルなRx.Observable.of([])に変更 ([de09e1e90ac8cf148b29f100d63302251f443ef1](https://github.com/frontainer/frontplate-cli/commit/de09e1e90ac8cf148b29f100d63302251f443ef1))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/frontainer/frontplate-cli/compare/v1.1.2...v1.1.3) (2016-10-10)


### fix

* ユニットテスト用のファイル名を*-spec.jsではなく*spec.jsに ([eaf58d650582f74837b25ee9bc67a3ba0ac11a40](https://github.com/frontainer/frontplate-cli/commit/eaf58d650582f74837b25ee9bc67a3ba0ac11a40))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/frontainer/frontplate-cli/compare/v1.1.1...v1.1.2) (2016-10-10)


### fix

* babelrcの設定が反映されていない ([8a14f66317bfc89a99c5013a312841bac199637c](https://github.com/frontainer/frontplate-cli/commit/8a14f66317bfc89a99c5013a312841bac199637c))
* BrowserSyncのproxyプロパティが指定できない ([a04188b416d92b64df2c7b3ef440680a051ac95f](https://github.com/frontainer/frontplate-cli/commit/a04188b416d92b64df2c7b3ef440680a051ac95f))
* merge後のユニットテスト結果が一致していない ([ac24a305d0ba824b7a3952fe6f9296dc816339d0](https://github.com/frontainer/frontplate-cli/commit/ac24a305d0ba824b7a3952fe6f9296dc816339d0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/frontainer/frontplate-cli/compare/v1.0.2...v1.1.0) (2016-10-10)


### feat

* 差分で設定を変更できるように ([b44380658885d7871d5c6f752bc6dd79fb2ecdb6](https://github.com/frontainer/frontplate-cli/commit/b44380658885d7871d5c6f752bc6dd79fb2ecdb6))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/frontainer/frontplate-cli/compare/v1.0.1...v1.0.2) (2016-10-09)


### fix

* frp create --branchオプションを使うとエラーになる ([7d4e80cf96979d898188db3d949f07a6af7cbcea](https://github.com/frontainer/frontplate-cli/commit/7d4e80cf96979d898188db3d949f07a6af7cbcea))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/frontainer/frontplate-cli/compare/v1.0.0...v1.0.1) (2016-10-09)




<a name="1.0.0"></a>
# [1.0.0](https://github.com/frontainer/frontplate-cli/compare/v0.3.2...v1.0.0) (2016-10-09)


### feat

* versionが表記されたテキストを出力 ([12f8c460ac818025e109ce1ac65fcf6dd877edce](https://github.com/frontainer/frontplate-cli/commit/12f8c460ac818025e109ce1ac65fcf6dd877edce))
* 指定ブランチからプロジェクトを生成できるようにfrp createに-b --branchオプションを追加 ([a0c5c993840a6ecf4105b76c5ef344d0a4141693](https://github.com/frontainer/frontplate-cli/commit/a0c5c993840a6ecf4105b76c5ef344d0a4141693))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/frontainer/frontplate-cli/compare/v0.3.1...v0.3.2) (2016-10-08)


### feat

* production時にcssもsourcemapなしの最適化した形で出力 ([a0c97ab52dc3e052dd8914908679d72de3a8f421](https://github.com/frontainer/frontplate-cli/commit/a0c97ab52dc3e052dd8914908679d72de3a8f421))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/frontainer/frontplate-cli/compare/v0.3.0...v0.3.1) (2016-10-08)


### temp

* テンプレートダウンロード先をdevelopブランチに ([a533fc3d7f4b3b2dd599b35a6d2c9a8149b7e0cb](https://github.com/frontainer/frontplate-cli/commit/a533fc3d7f4b3b2dd599b35a6d2c9a8149b7e0cb))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/frontainer/frontplate-cli/compare/v0.2.4...v0.3.0) (2016-10-08)


### feat

* 1つのビューテンプレートから複数HTMLを出力 ([8cea58c58b26d04e6e3531e99937e25f8d35650f](https://github.com/frontainer/frontplate-cli/commit/8cea58c58b26d04e6e3531e99937e25f8d35650f))
* スタイルガイド生成にfrontnote追加 ([ce2919960fa13bbc2a85159cd0fade0f4170e752](https://github.com/frontainer/frontplate-cli/commit/ce2919960fa13bbc2a85159cd0fade0f4170e752))



<a name="0.2.4"></a>
## [0.2.4](https://github.com/frontainer/frontplate-cli/compare/v0.2.3...v0.2.4) (2016-10-06)


### feat

* basePathを一括で変更できるようにcore.config.jsを追加 ([07010ab0d6a9e665c401b6e4e7d10396cb9a98ac](https://github.com/frontainer/frontplate-cli/commit/07010ab0d6a9e665c401b6e4e7d10396cb9a98ac))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/frontainer/frontplate-cli/compare/v0.2.2...v0.2.3) (2016-10-06)


### fix

* -spec.js内でimportできない ([ff8fd29f3d786d1815156de541b89126f258d031](https://github.com/frontainer/frontplate-cli/commit/ff8fd29f3d786d1815156de541b89126f258d031))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/frontainer/frontplate-cli/compare/v0.2.1...v0.2.2) (2016-10-06)


### fix

* styleとimageのwatchタスクがエラーになる ([09d9ba3c3f7c6975ba6dda3e339d8a9b033d638c](https://github.com/frontainer/frontplate-cli/commit/09d9ba3c3f7c6975ba6dda3e339d8a9b033d638c))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/frontainer/frontplate-cli/compare/v0.2.0...v0.2.1) (2016-10-06)


### fix

* テストに失敗してもSucceededが表示されている ([18bb924b9e379e791cba5676847db6d7895b8b3d](https://github.com/frontainer/frontplate-cli/commit/18bb924b9e379e791cba5676847db6d7895b8b3d))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/frontainer/frontplate-cli/compare/v0.1.8...v0.2.0) (2016-10-06)


### breaking

* babel関連の設定をwebpack.configから.babelrcへ ([a599fb14b0d90a2432a887362dd2b2ca6f93d5a5](https://github.com/frontainer/frontplate-cli/commit/a599fb14b0d90a2432a887362dd2b2ca6f93d5a5))
* mocha + power-assertからjasmineに ([f77e11987d9f6f4c780f8f8977688063d812c665](https://github.com/frontainer/frontplate-cli/commit/f77e11987d9f6f4c780f8f8977688063d812c665))
* webpack2用に設定をマイグレーション ([bd03e0d62844023d2dd33f4cab0727048411c8b8](https://github.com/frontainer/frontplate-cli/commit/bd03e0d62844023d2dd33f4cab0727048411c8b8))

### feat

* production build時にwebpack.optimize.AggressiveSplittingPluginを実行 ([29308a8269595e0a627b6cdd20ad8bc609f855b6](https://github.com/frontainer/frontplate-cli/commit/29308a8269595e0a627b6cdd20ad8bc609f855b6))

### fix

* entryが空だとエラーになる ([bb13f1efb3328de74e4d89eb9c99156a47ce7bb1](https://github.com/frontainer/frontplate-cli/commit/bb13f1efb3328de74e4d89eb9c99156a47ce7bb1))



<a name="0.1.8"></a>
## [0.1.8](https://github.com/frontainer/frontplate-cli/compare/v0.1.7...v0.1.8) (2016-10-03)


### doc

* add comments ([15ab64eb8e5a9653a37ca1e29b9350a162d30d4d](https://github.com/frontainer/frontplate-cli/commit/15ab64eb8e5a9653a37ca1e29b9350a162d30d4d))



<a name="0.1.7"></a>
## [0.1.7](https://github.com/frontainer/frontplate-cli/compare/v0.1.6...v0.1.7) (2016-10-02)


### fix

* scriptパス間違い ([52f241874eabb3468da70e08e8d77237a81c625c](https://github.com/frontainer/frontplate-cli/commit/52f241874eabb3468da70e08e8d77237a81c625c))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/frontainer/frontplate-cli/compare/v0.1.5...v0.1.6) (2016-10-02)


### fix

* ローカルにインストールされたスクリプトを呼ぶと処理位置がわからなくなるので廃止 ([910f89d684ac35edd0904a5cf5a159c9f9f8e1b5](https://github.com/frontainer/frontplate-cli/commit/910f89d684ac35edd0904a5cf5a159c9f9f8e1b5))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/frontainer/frontplate-cli/compare/v0.1.4...v0.1.5) (2016-10-02)


### feat

* ダウンロードしたファイルのpackage.jsonにfrpプロパティがある場合に続けて依存ファイルをダウンロードする機能 ([d6464be1ecbb7c5a087a12d5f91e82b60b7c9496](https://github.com/frontainer/frontplate-cli/commit/d6464be1ecbb7c5a087a12d5f91e82b60b7c9496))

### fix

* configの引数がオプションになってしまっている ([64713370f01252d8c756c61a5755ce6259d1e716](https://github.com/frontainer/frontplate-cli/commit/64713370f01252d8c756c61a5755ce6259d1e716))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/frontainer/frontplate-cli/compare/v0.1.3...v0.1.4) (2016-10-01)


### feat

* update packages ([81470504c94455ada8d481e3cf2335860181173f](https://github.com/frontainer/frontplate-cli/commit/81470504c94455ada8d481e3cf2335860181173f))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/frontainer/frontplate-cli/compare/v0.1.2...v0.1.3) (2016-10-01)


### fix

* scss更新後に正しくビルドされない ([a811d05d292a7b47602978d1ad2956385567bd0e](https://github.com/frontainer/frontplate-cli/commit/a811d05d292a7b47602978d1ad2956385567bd0e))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/frontainer/frontplate-cli/compare/v0.1.1...v0.1.2) (2016-10-01)


### fix

* globですべてmain.jsになってしまったので差し戻し ([de8c73f749b478a63beeb257fd5e1964cc97b555](https://github.com/frontainer/frontplate-cli/commit/de8c73f749b478a63beeb257fd5e1964cc97b555))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/frontainer/frontplate-cli/compare/v0.1.0...v0.1.1) (2016-09-30)


### feat

* ./src/jsをrootパスに ([5482c9ba8951583ce2c4680e49b02fba543cab1d](https://github.com/frontainer/frontplate-cli/commit/5482c9ba8951583ce2c4680e49b02fba543cab1d))

### fix

* ビルドするjsを./src/js/xxxx.js(-spec.jsは除く)に修正 ([824855c9bd633eddde3231588b6fb4730d12a3fe](https://github.com/frontainer/frontplate-cli/commit/824855c9bd633eddde3231588b6fb4730d12a3fe))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/frontainer/frontplate-cli/compare/v0.0.12...v0.1.0) (2016-09-29)


### fix

* frp createに失敗する ([162b6e532431d9863067173a5c4e5ef77b026221](https://github.com/frontainer/frontplate-cli/commit/162b6e532431d9863067173a5c4e5ef77b026221))



<a name="0.0.12"></a>
## [0.0.12](https://github.com/frontainer/frontplate-cli/compare/v0.0.11...v0.0.12) (2016-09-29)


### doc

* task command追加 & 不要になった記述を削除 ([282d29bb1c5c3a57e329833f199a66ee29b880fa](https://github.com/frontainer/frontplate-cli/commit/282d29bb1c5c3a57e329833f199a66ee29b880fa))

### feat

* add changelog ([93f362966e0702d3cde353ea6b2cbd3d96f46c8d](https://github.com/frontainer/frontplate-cli/commit/93f362966e0702d3cde353ea6b2cbd3d96f46c8d))
* add unit testing ([abbf8c36068f6e4ea33b88349a210da464fd4975](https://github.com/frontainer/frontplate-cli/commit/abbf8c36068f6e4ea33b88349a210da464fd4975))

### fix

* configに引数統一できていない ([7796b3a763132c6283315465cabb42f1c39caa40](https://github.com/frontainer/frontplate-cli/commit/7796b3a763132c6283315465cabb42f1c39caa40))



<a name="0.0.11"></a>
## [0.0.11](https://github.com/frontainer/frontplate-cli/compare/v0.0.10...v0.0.11) (2016-09-28)


### feat

* 個別にタスクを実行できるtask <name>コマンドを追加 ([be5e59e1340b64799ac1a5d61cf0bdecab33f7af](https://github.com/frontainer/frontplate-cli/commit/be5e59e1340b64799ac1a5d61cf0bdecab33f7af))

### fix

* 各タスクの引数をすべてconfigのみに統一 ([d071600613e380e0bead2dc2fd7da323f0c35a8b](https://github.com/frontainer/frontplate-cli/commit/d071600613e380e0bead2dc2fd7da323f0c35a8b))



<a name="0.0.10"></a>
## [0.0.10](https://github.com/frontainer/frontplate-cli/compare/v0.0.9...v0.0.10) (2016-09-28)


### fix

* 2重でdevelop version warningが表示される ([bc4a6037b2d650fbb594080f3ea2108c274cc4e6](https://github.com/frontainer/frontplate-cli/commit/bc4a6037b2d650fbb594080f3ea2108c274cc4e6))
* ejsのエラーが表示されない ([d8dcc81b1e49a2f040bee647831bc42031cfc9bf](https://github.com/frontainer/frontplate-cli/commit/d8dcc81b1e49a2f040bee647831bc42031cfc9bf))
* ローカルのfrp.config.jsが反映されない ([2cac177e0b070c8168bb1696c2494ed5598760fa](https://github.com/frontainer/frontplate-cli/commit/2cac177e0b070c8168bb1696c2494ed5598760fa))



<a name="0.0.9"></a>
## [0.0.9](https://github.com/frontainer/frontplate-cli/compare/v0.0.8...v0.0.9) (2016-09-28)


### fix

* compilerのログレベルをQUIETに ([4f589cf2d0fc7cb7f09ad4089914b139b8e39170](https://github.com/frontainer/frontplate-cli/commit/4f589cf2d0fc7cb7f09ad4089914b139b8e39170))
* loaderの順番間違い ([e604894b638093037f8680e796846db06aeaf106](https://github.com/frontainer/frontplate-cli/commit/e604894b638093037f8680e796846db06aeaf106))



<a name="0.0.8"></a>
## [0.0.8](https://github.com/frontainer/frontplate-cli/compare/v0.0.7...v0.0.8) (2016-09-28)


### feat

* devビルド時にはwebpackをdebugモードで実行する ([feb99ab50413b99ff75da8a4988dbdc0491c432d](https://github.com/frontainer/frontplate-cli/commit/feb99ab50413b99ff75da8a4988dbdc0491c432d))

### fix

* production実行時にないパッケージを参照してエラーになっている ([938fd3077052e9fbd11ba8c135422295f50fcfe1](https://github.com/frontainer/frontplate-cli/commit/938fd3077052e9fbd11ba8c135422295f50fcfe1))



<a name="0.0.7"></a>
## [0.0.7](https://github.com/frontainer/frontplate-cli/compare/v0.0.6...v0.0.7) (2016-09-27)


### feat

* ビルド環境に応じて環境変数を定義しつつ、devビルドであることをconsoleで表示するように変更 ([b41b416a59feb40422e0aaabddf52faa3ee4c5d2](https://github.com/frontainer/frontplate-cli/commit/b41b416a59feb40422e0aaabddf52faa3ee4c5d2))

### fix

* console.logではなくconsole.warnでdevビルドであることを強調表示 ([678120e1a0ec2c492a7172626ac6d4dc03d4d9fe](https://github.com/frontainer/frontplate-cli/commit/678120e1a0ec2c492a7172626ac6d4dc03d4d9fe))



<a name="0.0.6"></a>
## [0.0.6](https://github.com/frontainer/frontplate-cli/compare/v0.0.5...v0.0.6) (2016-09-26)




<a name="0.0.5"></a>
## [0.0.5](https://github.com/frontainer/frontplate-cli/compare/v0.0.4...v0.0.5) (2016-09-26)




<a name="0.0.4"></a>
## [0.0.4](https://github.com/frontainer/frontplate-cli/compare/v0.0.3...v0.0.4) (2016-09-26)




<a name="0.0.3"></a>
## [0.0.3](https://github.com/frontainer/frontplate-cli/compare/v0.0.2...v0.0.3) (2016-09-26)


### fix

* github オプションを参照するように修正 ([0f1c19e766041668a1b20fa9027a68c459c8619c](https://github.com/frontainer/frontplate-cli/commit/0f1c19e766041668a1b20fa9027a68c459c8619c))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/frontainer/frontplate-cli/compare/dbe182440b17aa371241c373564418feeafb7fa7...v0.0.2) (2016-09-25)


### fix

* bin path ([dbe182440b17aa371241c373564418feeafb7fa7](https://github.com/frontainer/frontplate-cli/commit/dbe182440b17aa371241c373564418feeafb7fa7))



