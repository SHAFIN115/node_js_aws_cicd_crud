#!/bin/bash
cd /home/ubuntu/nodeapp
pm2 restart server.js || pm2 start server.js