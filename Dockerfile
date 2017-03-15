# start from amazonlinux base image
FROM nginx

RUN apt-get update -y
RUN apt-get install wget nodejs npm -y

# create node system link instead of nodejs
RUN ln -s `which nodejs` /usr/bin/node

RUN npm install -g npm@latest
RUN npm install -g n pm2
RUN n latest

# make project directory, clone repo, andfu install dependencies, 
RUN mkdir -p /var/www/html
RUN mkdir -p /logs
WORKDIR /var/www/html
COPY . /var/www/html
RUN echo "<b>text</b>" >> ./index.html # test remove this ***

# might not need this VVV
RUN chmod 755 -R /var/www/html/public/

RUN npm i
# put back after done messing with nginx config file VVV
RUN npm run build

# move nginx config
RUN cp ./nginx.conf /etc/nginx/nginx.conf

# expose port 80
EXPOSE 80

CMD service nginx restart ; npm build ; npm start