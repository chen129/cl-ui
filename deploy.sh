#!/usr/bin/env sh

set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
