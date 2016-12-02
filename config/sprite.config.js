'use strict';
module.exports = [
    {
        src: `${FRP_SRC}/sprites/icon/*.{png,gif,jpg}`,    // 読み込む画像
        destImage: `${FRP_SRC}/images/icon.png`,           // 画像出力先
        destCSS: `${FRP_SRC}/sass/sprites/_icon.scss`,     // CSS出力先
        imgPath: '../images/icon.png',              // CSS内での画像パス
        padding: 2,                                 // 画像の間隔
        scale: 1.0,                                 // 画像表示サイズ（Retina対応なら0.5にする）
        mixin: true,                               // @mixin spriteを出力するかどうか
        selector: true                              // .icon {&.icon-name {}}のクラス定義を出力するかどうか
    }
];