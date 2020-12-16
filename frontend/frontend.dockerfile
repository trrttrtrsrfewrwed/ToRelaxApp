FROM node:alpine3.11

ARG BASE_URL
ENV REACT_APP_BASE_URL=http://localhost:8080

ARG PORT
ENV PORT=$PORT

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
