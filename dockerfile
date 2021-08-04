FROM node:carbon-alpine
RUN mkdir /technogenesis_madro
COPY package.json /technogenesis_madro
COPY server.js /technogenesis_madro
COPY app /technogenesis_madro
COPY db /technogenesis_madro
WORKDIR /technogenesis_madro
RUN npm install
EXPOSE 3000
CMD node server.js
