#!/bin/bash
set -e

export HOME=/home/ec2-user
APP_DIR="/home/ec2-user/node_js_aws_cicd_crud"

cd "$APP_DIR"

echo "Stopping old process..."
pm2 delete node_crud_app || true

echo "Starting fresh..."
pm2 start npm --name node_crud_app -- run start

echo "Saving pm2 process list..."
pm2 save

echo "Application started."