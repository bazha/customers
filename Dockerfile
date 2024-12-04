FROM node:20.9.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npx typeorm migration:generate -n CreateCustomersTable
RUN npx typeorm migration:run

EXPOSE 3004
# CMD ["npm", "run", "start:dev"] 