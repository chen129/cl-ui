#!/usr/bin/env sh

set -e

git clone https://${GH_REF} .temp
cd .temp
git checkout gh-pages
cd ../
mv .temp/.git dist
cd dist
git config user.name "${U_NAME}"
git config user.email "${U_EMAIL}"
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:chen129/cl-ui.git master:gh-pages

cd -
