#!bin/sh
# portfolioのルートディレクトリで
# npm install
# package-lock.json
# に変更があれば、事前にコミットしておく。その後
# sh deploy.sh
# 上記コマンドを実行する
#
# masterブランチ名が異なる人は変えてください(いないと思うが)
MASTER_BRANCH='master'
# TODO: 自分の開発用サービス名に変更する
DEVELOPMENT_SERVER="dev-portfolio-60b7a"
# TODO: 自分の本番公開用サービス名に変更する
PRODUCTION_SERVER="portfolio-47ea0"

# $1:execute status
# $2:error message
function check_execute() {
  if [ $1 -gt 0 ]; then
    echo $2
    exit $1
  fi
}

# 開発環境用デプロイ(currentブランチ)
# switch to development server
firebase use ${DEVELOPMENT_SERVER}
# build with development mode
npm run build:development
# build check
check_execute $? "build error for development"
# deploy to development server
firebase deploy

# 本番用デプロイ(masterブランチ)
# switch to production server
git checkout .firebase/hosting.ZGlzdA.cache
git checkout ${MASTER_BRANCH}
# checkout check
check_execute $? "checkout to master error"
git pull
# switch to production server
firebase use ${PRODUCTION_SERVER}
# build with production mode
npm run build:production
# build check
check_execute $? "build error for development"
# deploy to production server
firebase deploy
# cache戻しておく
git checkout .firebase/hosting.ZGlzdA.cache
