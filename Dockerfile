FROM node:14-alpine

WORKDIR /index.js

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
