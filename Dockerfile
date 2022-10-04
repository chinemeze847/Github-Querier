#base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install -g typescript
RUN npm install -g ts-node

# Bundle app source
COPY ./src ./src

EXPOSE 3000
CMD npm run start