FROM node:carbon-alpine
WORKDIR /apimadro
COPY package*.json /.
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
