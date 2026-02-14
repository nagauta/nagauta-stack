# 0002: APIルートのテスト追加

## 目的

placeholderテストを実際のAPIルートテストに置き換え、スターターテンプレートの品質を担保する。

## 方針

- Honoの `app.request()` でHTTPリクエストをシミュレート（サーバー起動不要）
- `vi.mock` で `getDb()` をモックし、DB接続なしでテスト実行
- Drizzleのチェーンパターンをモックで再現

## テストケース

| エンドポイント | ケース | 期待 |
|--------------|--------|------|
| GET /examples | アイテムあり | 200 + HTML |
| GET /examples | アイテムなし | 200 |
| POST /examples | 有効な入力 | 200 + HTML partial |
| POST /examples | タイトル空 | 400 |
| POST /examples | タイトルなし | 400 |
| POST /examples | DB挿入失敗 | 500 |
| DELETE /examples/:id | 正常削除 | 200 |
