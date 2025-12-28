#!/bin/bash
set -e

WEB_ROOT="/var/www/html"
TMP_DIR="/tmp/frontend-build"

echo "Deploying frontend..."

# Clean old site
sudo rm -rf ${WEB_ROOT}/*

# Copy new build
sudo cp -r ${TMP_DIR}/* ${WEB_ROOT}/

# Fix permissions
sudo chown -R www-data:www-data ${WEB_ROOT}
sudo chmod -R 755 ${WEB_ROOT}

# Restart web server
sudo systemctl restart nginx

echo "Frontend deployment completed successfully."
