# start from amazonlinux base image
FROM nginx

# update and install os level dependencies
RUN apt-get update -y
RUN apt-get install wget nodejs npm -y

# create node system link instead of nodejs
RUN ln -s `which nodejs` /usr/bin/node

# update npm, install pm2 globally, and update nodejs
RUN npm install -g npm@latest
RUN npm install -g n pm2
RUN n latest

# make project directory, copy directory contents into it 
RUN mkdir -p /var/www/html
RUN mkdir -p /logs
WORKDIR /var/www/html
COPY . /var/www/html

# might not need this VVV
RUN chmod 755 -R /var/www/html/public/

# clean up unneeded dependencies
RUN apt-get remove wget -y

# expose port 80
EXPOSE 80

# restart nginx and start npm
CMD npm i ; npm run build ; cp ./nginx.conf /etc/nginx/nginx.conf ; service nginx start ; npm start