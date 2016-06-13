FROM node:6

MAINTAINER Jason LeMoine <github@lemoine.io>

ENV NODE_ENV=development
WORKDIR /usr/local/climbing.react

COPY package.json /usr/local/climbing.react/package.json
RUN npm install

COPY .babelrc /usr/local/climbing.react/.babelrc
COPY webpack /usr/local/climbing.react/webpack
COPY app /usr/local/climbing.react/app
RUN npm run build:devel

EXPOSE 8080
RUN npm start
