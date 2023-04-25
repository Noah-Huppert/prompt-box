FROM node:20.0.0-alpine3.17

RUN apk add bash

WORKDIR /mnt
ENTRYPOINT [ "bash", "-c", "npm install && npm run dev" ]