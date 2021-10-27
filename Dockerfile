FROM node:14

# Create app directory
WORKDIR /app

COPY package.json ./
RUN yarn install

# Bundle app source
COPY . ./

EXPOSE 3000
CMD ["yarn", "start"]