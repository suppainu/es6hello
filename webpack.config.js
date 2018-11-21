// Node.jsの標準モジュール　ファイルやパス関連のユーティリティ
const path = require('path');

module.exports = {
    // webpack4以降は設定しないと警告が出る。最適化するかどうか。今はしない。（開発なので）
    mode: 'development',
    devServer: {
        open: true,
        openPage: 'index.html',
        // 絶対パスで格納。 path.join  を使用することでプラットフォーム間の差異を吸収。
        // publicというディレクトリが基準になる。
        contentBase: path.join(__dirname, 'public'),
        // HTMLに対応するブラウザリロード。（JSはもともと自動）
        watchContentBase: true,
        port: 8081,
    }
};