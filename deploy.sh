#!/usr/bin/env sh

set -e

cd docs/.vuepress/dist
git config user.name "${USER_NAME}"
git config user.email "${USER_EMAIL}"
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:chen129/cl-ui.git master:${P_BRANCH}
