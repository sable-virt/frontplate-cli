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



