FROM node:lts-alpine

WORKDIR /usr/src/app
COPY . .

CMD [ "sh", "/usr/src/app/entrypoint.sh" ]
