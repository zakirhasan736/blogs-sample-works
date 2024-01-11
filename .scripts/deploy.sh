#!/bin/bash
set -e


echo "Deployment started..."

# Pull the latest version of the app
git pull origin master
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
/root/.nvm/versions/node/v20.9.0/bin/pm2 reload 0

echo "PM2 Setup done!"

echo "Deployment Finished!"
