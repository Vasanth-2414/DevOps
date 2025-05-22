
#Set the base image for building
FROM node:18 AS builder

#Set the working directory to /app
WORKDIR /app

#Copy the dependencies and application files
COPY package.json* .
RUN npm install
COPY . .
RUN npm run build

#Production Stage

#Set the base image for production
FROM node:18-slim

#Copy the files from builder image to production image
WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["node","server.js"]
