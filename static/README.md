# STATIC

static配下のファイルはそのまま公開環境に配置されます。
アイコンや画像はこのディレクトリで管理します。

## /static/assets/css
コンパイル後のヘッダー・フッター用の共通CSSが出力されます。
common.cssは直接編集は禁止です。
編集する場合は、`assets/scss` を更新し、`npm run sass` でコンパイルします。

## /static/assets/img
ディレクトリごとに画像を管理します。
圧縮後の画像を格納するようにします。
