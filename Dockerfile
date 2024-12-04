FROM node:20.9.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm run migrate:generate
RUN npm run migrate

EXPOSE 3004
# CMD ["npm", "run", "start:dev"] 