FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY . .

RUN npm ci

EXPOSE 3000
EXPOSE 9222 

CMD [ "npm", "run", "start" ]
