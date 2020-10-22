# PocketBank.tw
Official Website for PocketBank APP

# Remote Deployment
```shell
# clone project
git clone https://github.com/BOLT-Protocol/PocketBank.tw.git

# update frontend in build/frontend/ and commit
(... update files in PocketBank.tw/build/frontend/ ...)
(... commit on github ...)

# deploy
cd PocketBank.tw/
pm2 deploy ecosystem.config.js production
```
