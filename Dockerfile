
FROM node:12

COPY package.json ./
COPY ./test ./test
COPY ./dash-page.js ./
COPY ./wait-for-grid.sh ./
RUN apt-get update
RUN apt-get install -y jq
RUN yarn

#TODO: dockerize the whole app and test?
