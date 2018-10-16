# mem.js

## 課題の進め方と提出について

### このリポジトリをForkする
右上のForkボタンをクリックすると自分のリポジトリとしてリポジトリのコピーが作成できる
<img width="500" src="https://user-images.githubusercontent.com/32432363/46954981-d4638d80-d0cc-11e8-8198-df5cc95453c5.png">

### リポジトリをローカルにcloneする
```
$ cd <レポジトリのクローンを作成したいディレクトリ>
$ git clone git@github.com:<ユーザ名>/mem.js.git
```
<img width="500" src="https://user-images.githubusercontent.com/32432363/46955118-24425480-d0cd-11e8-94c3-c882015657be.png">

### 課題の制作をおこない、リモートにプッシュする
```
$ cd <クローンしてできたディレクトリ>
$ git add .
$ git commit
$ git push origin master
```

### PullRequestを送る
課題内容が完了したら、ForkしてきたリポジトリにPullRequestを送り課題を提出します。
PullRequestは下の画像のように矢印マーク(Compare and Pull requestボタン)を押したあと、Create pull requestボタンで作成します。
<img width="1049" alt="2018-10-15 23 00 09" src="https://user-images.githubusercontent.com/32432363/46955549-2527b600-d0ce-11e8-9736-5717fe121e59.png">
<img width="1046" alt="2018-10-15 23 01 21" src="https://user-images.githubusercontent.com/32432363/46955595-3ffa2a80-d0ce-11e8-997a-993059adc750.png">


### レビュー内容を修正する
PullRequestに対してレビューが来たら、該当箇所を修正しプッシュします。
するとPullRequestに修正分のコミットが追加されます。
追加されたらをレビューをくれた人にPullRequest上のコメントしましょう。

### PullRequestのマージ
修正が完了したらPullRequestをマージしてもらいましょう。
マージされたら、該当の課題は終了となります。
