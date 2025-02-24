#!/bin/bash

sudo systemctl stop nginx

sudo ngrok service stop

git pull origin main

sudo cp -r dist/* /var/www/html

sudo systemctl start nginx

sudo ngrok service start

export NGROK_AUTHTOKEN=$1

ngrok http http://localhost:80
