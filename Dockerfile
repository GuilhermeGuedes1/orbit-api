FROM node:alpine

WORKDIR /app

RUN npm install -g yarn

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]