FROM nginx:latest
ADD ./dist /var/www/html/vuePress
ADD ./nginx/conf.d /etc/nginx/conf.d
EXPOSE 80