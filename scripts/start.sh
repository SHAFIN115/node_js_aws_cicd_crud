#!/bin/bash
cd /home/ec2-user/node_js_aws_cicd_crud || exit 1
pm2 restart node_crud_app || pm2 start npm --name node_crud_app -- run start