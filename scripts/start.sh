#!/bin/bash
set -e

APP_DIR="/home/ec2-user/node_js_aws_cicd_crud"

cd "$APP_DIR"

echo "Starting application..."
# Restart if already running, otherwise start fresh
pm2 restart node_crud_app || pm2 start npm --name node_crud_app -- run start

echo "Saving pm2 process list..."
pm2 save

echo "Application started."