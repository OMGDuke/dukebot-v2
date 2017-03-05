FROM node:7.6.0-alpine

WORKDIR ./bot
copy . ./

RUN npm install
RUN npm install -g babel-cli

CMD  npm start
