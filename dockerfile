FROM node:14.16.0
WORKDIR /apimadro
RUN mkdir mongo-volume
COPY package*.json /.
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
