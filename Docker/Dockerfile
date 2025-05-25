FROM node:18 AS builder

WORKDIR /node-app

COPY package.json* /node-app

RUN npm install

COPY . /node-app

RUN npm run build



FROM node:18-slim

WORKDIR /app

COPY --from=builder /node-app .

EXPOSE 3000

CMD ["node","app.js"]
