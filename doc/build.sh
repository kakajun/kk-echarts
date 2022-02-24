#!/bin/bash 
yarn build
scp -r  ./dist root@106.52.181.90:/data/avue/avue-web/
scp -r  ./api root@106.52.181.90:/data/avue/avue-web/
scp ./app.js root@106.52.181.90:/data/avue/avue-web/app.js
scp ./package.json root@106.52.181.90:/data/avue/avue-web/package.json

ssh root@106.52.181.90 '
pm2 restart avue
'

