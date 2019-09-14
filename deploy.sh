#docker build -t kkb-frontend git@github.com:kkbjs/vue-docker.git
# dist包在git李
git pull
docker build -t vue-presss-blog .
docker stop vue-presss-blog-container
docker rm vue-presss-blog-container
docker run -p 8080:80 -d --name vue-presss-blog-container vue-presss-blog 
