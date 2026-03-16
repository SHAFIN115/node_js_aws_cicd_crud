#!/bin/bash
# Navigate to the project directory
cd /home/ec2-user/node_js_aws_cicd_crud || exit 1

# Restart or start the app with pm2
pm2 restart server.js || pm2 start server.js