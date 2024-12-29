FROM ubuntu:14.04

RUN apt-get -yqq update
RUN apt-get -yqq install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

COPY . /build
WORKDIR /build


COPY /package*.json /build
RUN npm install
RUN npm run build

EXPOSE 5000

CMD ["npx", "start"] 
