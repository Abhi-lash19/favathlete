FROM node:14
WORKDIR /home/giria/NODEJS/express

ADD package.json /home/giria/NODEJS/express/package.json

RUN npm install

ADD . /home/giria/NODEJS/express

EXPOSE 8080
CMD ["node", "index.js"]