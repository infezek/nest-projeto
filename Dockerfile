FROM node:14.16.1

RUN npm install -g @nestjs/cli

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
