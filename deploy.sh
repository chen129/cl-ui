#!/usr/bin/env sh

set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chen129/cl-ui.git master:gh-pages

cd -
