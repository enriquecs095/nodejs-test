FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
#install dependencies
RUN npm install && npm install cors
# Bundle app source
COPY . .

EXPOSE 1337
CMD [ "node","index.js"] 

