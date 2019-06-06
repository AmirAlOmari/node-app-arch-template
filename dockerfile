FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000
EXPOSE 9222 

CMD [ "npm", "run", "start" ]
