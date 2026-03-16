#!/bin/bash
set -e

APP_DIR="/home/ec2-user/node_js_aws_cicd_crud"

echo "Fixing ownership..."
chown -R ec2-user:ec2-user "$APP_DIR"

echo "Installing dependencies..."
cd "$APP_DIR"
npm install --omit=dev

echo "Install complete."