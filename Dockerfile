FROM node:7.6.0-alpine

WORKDIR var/bot
COPY package.json ./
RUN npm install --only=production --silent
RUN npm install -g babel-cli

COPY src ./

CMD npm start
