sudo systemctl stop nginx

sudo systemctl stop ngrok

git pull origin main

sudo cp -r dist/* /var/www/html

sudo systemctl start nginx

ngrok http http://localhost:80
