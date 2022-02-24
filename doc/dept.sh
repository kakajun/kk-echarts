
#!/bin/bash 
yarn build
cd dist
git init 
git remote add origin https://gitee.com/smallweigit/avue-cdn.git
git add .
git commit -m 'init project'
git push origin master --force
rm -rf .git